import { CardHomePage } from "../../Components/CardHomePage";
import { Input } from "../../Components/Input/Input";
import { ModalCart } from "../../Components/Modal/ModalCartHomePage";

export const HomePage = () => {
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
            <button>Todos</button>
            <button>Acessórios</button>
            <button>Calçados</button>
            <button>Camisetas</button>
            <form>
              <Input />
              <button type="submit">Pesquisar</button>
            </form>
          </div>
        </section>
        <section>
          <h2>Nosso produtos</h2>
          <ul>
            <CardHomePage/>
          </ul>
        </section>
      </main>
      <ModalCart/>
    </>
  );
};
