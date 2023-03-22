import { useContext } from "react";
import { CardHomePage } from "../../Components/CardHomePage";
import { FormSearchProduct } from "../../Components/FormSearchProduct";
import { ModalCartHomePage } from "../../Components/Modal/ModalCartHomePage";
import { ProductsContext } from "../../Providers/ProductsContext";
import { StyledHeader, StyledMain } from "./style";
import { ImSearch, ImCart } from "react-icons/im";

export const HomePage = () => {
  const {
    getProductByType,
    renderAllProducts,
    setModal,
    setOpenClose,
    openClose,
  } = useContext(ProductsContext);
  return (
    <>
      <StyledHeader>
        <div>
          <span>Weartake</span>
          <div>
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              <ImCart />
            </button>
            {
              !openClose?
              <button
              onClick={() => {
                setOpenClose(true);
              }}
              >
              <ImSearch />
            </button>:
            null
            }
          </div>
        </div>
      </StyledHeader>
      <StyledMain>
        {openClose ? <FormSearchProduct /> : null}
        <section className="container__top">
            <button
              onClick={() => {
                renderAllProducts();
              }}
            >
              Todos
            </button>
            <button
              onClick={() => {
                getProductByType("Acessórios");
              }}
            >
              Acessórios
            </button>
            <button
              onClick={() => {
                getProductByType("Camisetas");
              }}
            >
              Camisetas
            </button>
        </section>
        <section className="container__bottom">
          <h1>Nosso produtos</h1>
          <ul>
            <CardHomePage />
          </ul>
        </section>
      </StyledMain>
      <ModalCartHomePage />
    </>
  );
};
