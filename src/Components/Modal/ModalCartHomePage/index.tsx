import { useContext } from "react";
import { ProductsContext } from "../../../Providers/ProductsContext";
import { CardModalCart } from "./CardModalCart";

export const ModalCartHomePage = () => {
  const { setModal, modal, setCart } = useContext(ProductsContext);
  return (
    <>
      {modal ? (
        <div>
          <h2>Carrinho</h2>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </button>
          <ul>
            <CardModalCart />
          </ul>
          <button
            onClick={() => {
              setCart([]);
              setModal(false);
            }}
          >
            Remover todos os produtos
          </button>
        </div>
      ) : null}
    </>
  );
};
