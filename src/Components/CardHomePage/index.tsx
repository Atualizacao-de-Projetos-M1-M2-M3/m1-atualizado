import { useContext } from "react";
import { ProductsContext } from "../../Providers/ProductsContext";
import gorro from "../../Assets/gorro.svg"
import { StyledLi } from "./style";

export const CardHomePage = () => {
  const { products, setToCart, } =
    useContext(ProductsContext);

  return (
    <>
      {products?.map((product) => {
        return (
          <StyledLi key={product.id}>
            <img src={gorro} alt={product.name} /> 
            <div>
              <h2>{product.name}</h2>
              <span>{product.type}</span>
              <p>{product.description}</p>
              <span className="price__product">{product.price} R$</span>
              <button
                onClick={() => {
                  setToCart(product);
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </StyledLi>
        );
      })}
    </>
  );
};
