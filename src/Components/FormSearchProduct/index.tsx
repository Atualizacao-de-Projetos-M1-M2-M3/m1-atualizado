import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ProductsContext } from "../../Providers/ProductsContext";

export interface ISearch {
  search: string;
}

const schema = yup.object({
    search: yup.string().required("Campo obrigatório!")
})

export const FormSearchProduct = () => {

    const {renderAfterSearch} = useContext(ProductsContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearch>({
    resolver: yupResolver(schema)
  });

  const searchResults = (data: ISearch) => {
    renderAfterSearch(data)
  };

  return (
    <form onSubmit={handleSubmit(searchResults)}>
      <Input
        {...register("search")}
        error= {errors.search?.message}
        type="text"
        label="Digite aqui sua pesquisa"
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
};
