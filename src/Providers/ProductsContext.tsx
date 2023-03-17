import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../Services/api";

interface IProductsProps {
  children: ReactNode;
}

interface IProductsContext {
  products: IProducts[] | null;
  getProductByType: (type: string) => Promise<void>;
  renderAllProducts: () => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  toCart: IProducts[] | any;
  setToCart: React.Dispatch<any>;
  cart: IProducts[];
  setCart: React.Dispatch<React.SetStateAction<IProducts[]>>
}

export interface IProducts {
  name: string;
  price: number;
  description: string;
  image: string;
  id: number;
  type: string;
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IProductsProps) => {
  const [products, setProducts] = useState(null);
  const [all, setAll] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {
        toast.error("Error");
      }
    };
    getProducts();
  }, [all]);

  const getProductByType = async (type: string) => {
    try {
      const { data } = await api.get(`/products?type=${type}`);
      setProducts(data);
    } catch (error) {
      toast.error("Error");
    }
  };

  const renderAllProducts = () => {
    setAll([]);
  };

  const [toCart, setToCart] = useState<IProducts | any>([]);
  let [cart, setCart] = useState<IProducts[]>([]);

  useEffect(() => {
    const addFristItem = () => {
      if (toCart.length == 0) {
        null;
      } else {
        let arr = [];
        arr = [...cart, toCart];
        if (
          !cart.some(
            (productFilter: IProducts) => productFilter.id === toCart?.id
          )
        ) {
          setCart(arr);
          toast.success("Item adiciona ao seu carrinho!");
        } else {
          toast.warning("O item já foi adiciona ao seu carrinho ");
        }
      }
    };
    addFristItem();
  }, [toCart]);

  console.log(cart);

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProductByType,
        renderAllProducts,
        modal,
        setModal,
        toCart,
        setToCart,
        cart,
        setCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
