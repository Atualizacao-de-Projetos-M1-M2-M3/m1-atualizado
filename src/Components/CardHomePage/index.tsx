import { useContext } from "react";
import { ProductsContext } from "../../Providers/ProductsContext";

export const CardHomePage = () => {
  const { products, setToCart, } =
    useContext(ProductsContext);

  return (
    <>
      {products?.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <span>{product.type}</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span>{product.price}</span>
              <button
                onClick={() => {
                  setToCart(product);
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};
