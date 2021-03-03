import { InputStyles } from './input.styles'

interface InputProps {
    name: string;
    label?: string;
    errorMessage?: string;
    placeholder?: string
    value?: string;
    type: string;
    onBlur: (e: any) => any;
    onChange: (e: any) => any;
}

const Input = ({name,placeholder,value ,type, label, errorMessage, onBlur, onChange,...props}: InputProps) => {
    const { InputBase, ErrorMessage } = InputStyles;
    return(
        <>  
            <label>{label}</label>
            <div style={{position: 'relative'}}>
                <InputBase type={type} value={value} name={name} placeholder={placeholder} errorMessage={errorMessage} onBlur={onBlur} onChange={onChange} {...props}/>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </div>
        </>
    )
}

export default Input