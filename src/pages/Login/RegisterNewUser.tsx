import useHead from '../../hooks/useHead'
import useFetch from '../../hooks/useFetch';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm'
import { routes } from '../../utils/apiRoute';

const RegisterNewUser = () => {
    useHead('Cadastrar Novo Usuário');
    const initialState = {
        username: '',
        password: '',
        email: '',
    };

    const { request } = useFetch();
    const [ value, erro , Change, validate  ] = useForm(initialState);
    const { username, senha, email } = value;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        Object.values(erro).some(value => value) ? console.log('existe erro') :
        request(routes.newUser.url,routes.newUser.options(value))
    }
    return(
        <form style={{marginBottom: '2rem'}}>
            <Input name="username" errorMessage={erro.username} type="text" onChange={e => Change(e)} onBlur={e => validate(e)} value={username} placeholder="Nome do Usuário" />
            <Input type="text" errorMessage={erro.email} name="email" onChange={e => Change(e)} onBlur={e => validate(e)} value={email} placeholder="Email"/>
            <Input type="password" name="password" errorMessage={erro.password} onChange={e => Change(e)} onBlur={e => validate(e)} value={senha} placeholder="Senha"/>
            <Button style={{marginTop: '1rem'}} onClick={handleSubmit}>Cadastrar</Button>
        </form>
    )
}

export default RegisterNewUser;