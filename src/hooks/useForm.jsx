import React from 'react';

const validations = {
    email: {
        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido',
    }
}

const useForm = (initialState) => {
    const [value, setValue] = React.useState(initialState);
    const [erro, setErro] = React.useState(initialState);

    
    const validate = React.useCallback(({target}) => {
        const name = target.name;
        const value = target.value;
        
        if(!Object.keys(initialState).some(n => n === name)) return; 
        if(value.length === 0) {
            setErro({...erro, [name]: 'Preencha um valor'});
            return;
        } else if(validations[name] && !validations[name].pattern.test(value)) {
            setErro({...erro, [name]: validations[name].message});
            return;
        }
        setErro({...erro, [name]: ''});
        return;
    },[initialState, erro])
    
    const Change = (e) => {
        validate(e);
        const name = e.target.name;
        setValue({...value, [name] : e.target.value})
    };
    return [value, erro, Change, validate];

}

export default useForm;