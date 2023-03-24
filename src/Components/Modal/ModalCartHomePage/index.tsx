import { useContext } from "react";
import { ProductsContext } from "../../../Providers/ProductsContext";
import { StyledBackGround, StyledModal } from "../style";
import { CardModalCart } from "./CardModalCart";

export const ModalCartHomePage = () => {
  const { setModal, modal, setCart, cart } = useContext(ProductsContext);
  return (
    <>
      {modal ? (
        <>
          <StyledBackGround
            onClick={() => {
              setModal(false);
            }}
            className="background"
          ></StyledBackGround>
          <StyledModal>
            <div>
              <h2>Carrinho</h2>
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                X
              </button>
            </div>
            <ul>
              <CardModalCart />
            </ul>

            {cart.length == 0 ? null : (
              <button
                onClick={() => {
                  setCart([]);
                  setModal(false);
                }}
              >
                Remover todos os produtos
              </button>
            )}
          </StyledModal>
        </>
      ) : null}
    </>
  );
};
