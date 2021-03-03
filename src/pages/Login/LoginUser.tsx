import React from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import apiRoute from '../../utils/apiRoute';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';

const LoginUser = () => {
    const initialState = {
        email: '',
        senha: '',
    };
    const { request } = useFetch();
    const [ value, erro , Change, validate  ] = useForm(initialState);
    const { email, senha } = value;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        Object.values(erro).some(value => value) ? console.log('existe erro') :
        request(`${apiRoute}/jwt-auth/v1/token`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(value)
        })
        .then(res => res)
    }

    return(
        <form style={{marginBottom: '2rem'}}>
            <Input errorMessage={erro.email} onBlur={(e) => validate(e)} name="email" value={email} type="text" onChange={e => Change(e)} placeholder="Email" />
            <Input errorMessage={erro.senha} onBlur={(e) => validate(e)} name="senha" value={senha} type="password" onChange={e => Change(e)} placeholder="Senha"/>
            <Button style={{marginTop: '1rem'}} onClick={handleSubmit}>Login</Button>
        </form>
    )
}

export default LoginUser