import { useContext } from "react";
import { ProductsContext } from "../../../../Providers/ProductsContext";
import { StyledH1, StyledLi } from "./style";
import { BiTrash } from "react-icons/bi";
import gorro from "../../../../Assets/gorro.svg"

export const CardModalCart = () => {
  const { cart, removeProductFromCart } = useContext(ProductsContext);
  return (
    <>
      {cart.length == 0?
      <StyledH1>Nenhum item adicionado</StyledH1>
      :
      cart.map((product) => {
        return (
          <StyledLi key={product.id}>
            <img src={gorro} alt={product.name} />
            <div>
              <h2>{product.name}</h2>
              <span>{product.price} R$</span>
            </div>
              <button onClick={() =>{
                removeProductFromCart(product.id)
              }}><BiTrash/></button>
          </StyledLi>
        );
      })}
    </>
  );
};
