import { useContext } from "react";
import { CardHomePage } from "../../Components/CardHomePage";
import { Input } from "../../Components/Input/Input";
import { ModalCart } from "../../Components/Modal/ModalCartHomePage";
import { ProductsContext } from "../../Providers/ProductsContext";

export const HomePage = () => {
  const { getProductByType,renderAllProducts } = useContext(ProductsContext);
  return (
    <>
      <header>
        <span>Weartake</span>
        <div>
          <button>Carrinho</button>
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
            <form>
              <Input />
              <button type="submit">Pesquisar</button>
            </form>
          </div>
        </section>
        <section>
          <h2>Nosso produtos</h2>
          <ul>
            <CardHomePage />
          </ul>
        </section>
      </main>
      <ModalCart />
    </>
  );
};
