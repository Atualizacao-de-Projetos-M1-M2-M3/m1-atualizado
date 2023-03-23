import { forwardRef, InputHTMLAttributes, useContext } from "react";
import { ImSearch } from "react-icons/im";
import { StyledFielset } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ error, label, type, ...rest }, ref) => {
    return (
      <StyledFielset>
        <div className="container__fielset">
          <label htmlFor="inputSearch">{label}</label>
          <input
            placeholder="Digite aqui"
            type={type}
            id="inputSearch"
            ref={ref}
            {...rest}
          />
          <button type="submit">
            <ImSearch />
          </button>
        </div>
        <p>{error}</p>
      </StyledFielset>
    );
  }
);
