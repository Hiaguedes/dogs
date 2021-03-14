import React from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { loginRoutes } from '../../utils/apiRoute';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { useLoginContext } from '../../contexts/LoginContext';
import useHead from '../../hooks/useHead'
import Title from '../../components/Title'
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
    const initialState = {
        username: '',
        password: '',
    };
    const { request, error } = useFetch();
    const { token,setLoginToken, setUser, setLogged } = useLoginContext();
    const [ value, erro , Change, validate  ] = useForm(initialState);
    const { username, password } = value;
    useHead('Login')
    const navigate = useNavigate()


    const handleSubmit = (e: any) => {
        e.preventDefault();
        Object.values(erro).some(value => value) ? console.log('existe erro') :
        request(loginRoutes.TokenPost.url,loginRoutes.TokenPost.options(value)).then(res => {
            setLoginToken(res.json.token);
            setLogged(true);
            localStorage.setItem('dogsToken', res.json.token);
            navigate('/home')
        })
    }

    React.useEffect(() => {
        request(loginRoutes.getUser.url,loginRoutes.getUser.options(token)).then(res => setUser(res.json))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, request])

    return(
        <>
            <Title>Login</Title>
            <form style={{marginBottom: '2rem'}}>
                <Input errorMessage={erro.username} onBlur={(e) => validate(e)} name="username" value={username} type="text" onChange={e => Change(e)} placeholder="Nome de Usuário" />
                <Input errorMessage={erro.password} onBlur={(e) => validate(e)} name="password" value={password} type="password" onChange={e => Change(e)} placeholder="Senha"/>
                <Button style={{marginTop: '1rem'}} onClick={handleSubmit}>Login</Button>
                {error && <p style={{color: '#f35', marginTop: '1rem'}}>{error}</p> }
            </form>
        </>
    )
}

export default LoginUser