import React from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { routes } from '../../utils/apiRoute';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { useLoginContext } from '../../contexts/LoginContext'

const LoginUser = () => {
    const initialState = {
        username: '',
        password: '',
    };
    const { request } = useFetch();
    const { token,setLoginToken, setUser } = useLoginContext();
    const [ value, erro , Change, validate  ] = useForm(initialState);
    const { username, password } = value;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        Object.values(erro).some(value => value) ? console.log('existe erro') :
        request(routes.TokenPost.url,routes.TokenPost.options(value)).then(res => {setLoginToken(res.json.token)})
    }

    React.useEffect(() => {
        request(routes.getUser.url,routes.getUser.options(token)).then(res => setUser(res.json))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, request])

    return(
        <form style={{marginBottom: '2rem'}}>
            <Input errorMessage={erro.username} onBlur={(e) => validate(e)} name="username" value={username} type="text" onChange={e => Change(e)} placeholder="Nome de Usuário" />
            <Input errorMessage={erro.password} onBlur={(e) => validate(e)} name="password" value={password} type="password" onChange={e => Change(e)} placeholder="Senha"/>
            <Button style={{marginTop: '1rem'}} onClick={handleSubmit}>Login</Button>
        </form>
    )
}

export default LoginUser