import useHead from '../../hooks/useHead'
import useFetch from '../../hooks/useFetch';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm'
import { loginRoutes } from '../../utils/apiRoute';
import Title from '../../components/Title';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../contexts/LoginContext';

const RegisterNewUser = () => {
    useHead('Cadastrar Novo Usuário');
    const initialState = {
        username: '',
        password: '',
        email: '',
    };

    const { request, error } = useFetch();
    const [ value, erro , Change, validate  ] = useForm(initialState);
    const { username, senha, email } = value;
    const navigate = useNavigate();
    const { setLoginToken, setUser, setLogged } = useLoginContext();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        Object.values(erro).some(value => value) ? console.log('existe erro') :
        request(loginRoutes.newUser.url,loginRoutes.newUser.options(value))
        request(loginRoutes.TokenPost.url,loginRoutes.TokenPost.options(value)).then(res => {
            request(loginRoutes.getUser.url,loginRoutes.getUser.options(res.json.token)).then(res => setUser(res.json))
            setLoginToken(res.json.token);
            localStorage.setItem('dogsToken', res.json.token);
            setLogged(true)
            navigate('/home')
        })
    }
    return(
        <>
            <Title>Cadastrar Usuário</Title>
            <form style={{marginBottom: '2rem'}}>
                <Input name="username" errorMessage={erro.username} type="text" onChange={e => Change(e)} onBlur={e => validate(e)} value={username} placeholder="Nome do Usuário" />
                <Input type="text" errorMessage={erro.email} name="email" onChange={e => Change(e)} onBlur={e => validate(e)} value={email} placeholder="Email"/>
                <Input type="password" name="password" errorMessage={erro.password} onChange={e => Change(e)} onBlur={e => validate(e)} value={senha} placeholder="Senha"/>
                <Button style={{marginTop: '1rem'}} onClick={handleSubmit}>Cadastrar</Button>
                {error && <p style={{color: '#f35', marginTop: '1rem'}}>{error}</p> }
            </form>
        </>
    )
}

export default RegisterNewUser;