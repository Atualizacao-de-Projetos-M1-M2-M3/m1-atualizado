import { useContext } from "react";
import { ProductsContext } from "../../../../Providers/ProductsContext";

export const CardModalCart = () => {
  const { cart, removeProductFromCart } = useContext(ProductsContext);
  return (
    <>
      {cart.length == 0?
      <h1>Adicione intens primeiro</h1>
      :
      cart.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h2>{product.image}</h2>
              <span>{product.price}</span>
              <button onClick={() =>{
                removeProductFromCart(product.id)
              }}>Remover produto</button>
            </div>
          </li>
        );
      })}
    </>
  );
};
