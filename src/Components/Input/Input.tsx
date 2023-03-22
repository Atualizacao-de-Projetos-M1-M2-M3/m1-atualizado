import { forwardRef, InputHTMLAttributes, useContext } from "react"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    type: string
    error?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({error,label,type, ...rest}, ref) =>{


    return (
        <fieldset>
            <label htmlFor="inputSearch">{label}</label>
            <input  type={type} id="inputSearch" ref={ref} {...rest}/>
            <p>{error}</p>
        </fieldset>
    )
} 
) 