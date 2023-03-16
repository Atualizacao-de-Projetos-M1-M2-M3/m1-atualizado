import { CardModalCart } from "./CardModalCart"

export const ModalCart = () =>{
    return(
        <div>
            <h2>Carrinho</h2>
        <ul>
            <CardModalCart/>
        </ul>
        <button>Remover todos os produtos</button>
        </div>
    )
}