import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../Services/api";

interface IProductsProps {
  children: ReactNode;
}

interface IProductsContext {
    products: IProducts[] | null
    getProductByType: (type: string) => Promise<void>
    renderAllProducts: () => void
}

interface IProducts {
    name: string
    price: number
    description: string
    image: string
    id: number
    type: string
  }

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IProductsProps) => {
  const [products, setProducts] = useState(null);
  const [all, setAll] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {
        toast.error("Error")
      }
    };
    getProducts();
  }, [all]);

  const getProductByType = async (type : string) =>{
    try {
        const {data} = await api.get(`/products?type=${type}`)
        setProducts(data)
    } catch (error) {
        toast.error("Error")
    }
  }

  const renderAllProducts = () =>{
    setAll([])
  }

  return (
    <ProductsContext.Provider value={{products, getProductByType, renderAllProducts}}>{children}</ProductsContext.Provider>
  );
};
