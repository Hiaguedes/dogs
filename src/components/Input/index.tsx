import { InputStyles } from './input.styles'

interface InputProps {
    name: string;
    label?: string;
    errorMessage?: string;
    placeholder?: string
    value?: string;
    type: string;
}

const Input = ({name,placeholder,value ,type, label, errorMessage, ...props}: InputProps) => {
    const { InputBase, ErrorMessage } = InputStyles;
    return(
        <>  
            <label>{label}</label>
            <div style={{position: 'relative'}}>
                <InputBase type={type} value={value} name={name} placeholder={placeholder} errorMessage={errorMessage} {...props}/>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </div>
        </>
    )
}

export default Input