import { useContext } from "react";
import { CardHomePage } from "../../Components/CardHomePage";
import { FormSearchProduct } from "../../Components/FormSearchProduct";
import { Input } from "../../Components/Input/Input";
import { ModalCartHomePage } from "../../Components/Modal/ModalCartHomePage";
import { ProductsContext } from "../../Providers/ProductsContext";

export const HomePage = () => {
  const { getProductByType,renderAllProducts, setModal, } = useContext(ProductsContext);
  return (
    <>
      <header>
        <span>Weartake</span>
        <div>
          <button onClick={() =>{
            setModal(true)
          }}>Carrinho</button>
        </div>
      </header>
      <main>
        <section>
          <div>
            <button onClick={() =>{
              renderAllProducts()
            }}>Todos</button>
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
            <FormSearchProduct/>
          </div>
        </section>
        <section>
          <h2>Nosso produtos</h2>
          <ul>
            <CardHomePage />
          </ul>
        </section>
      </main>
      <ModalCartHomePage />
    </>
  );
};
