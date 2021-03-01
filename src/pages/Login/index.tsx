import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import useHead from '../../hooks/useHead'
import RegisterNewUser from './RegisterNewUser'
import LoginUser from './LoginUser';
import Button from '../../components/Button';


const Login	= () => {
    useHead('Login')
    return (
        <>
        <h2>Login</h2>
        <Routes>
            <Route path='/' element={<LoginUser />} />
            <Route path='recuperar-senha' element={<p>Rota para recuperar senha</p>} />
            <Route path='cadastro' element={<RegisterNewUser />} />
        </Routes>
        <>
        <div style={{display: 'flex'}}>
        <Link to="cadastro">
            <Button style={{marginRight: '1rem'}}>
                Cadastrar novo usuário
            </Button>
        </Link>
        <Link to="recuperar-senha">
            <Button>
                Recuperar Senha
            </Button>
        </Link>
        </div>
        </>
        </>
    )
}

export default Login