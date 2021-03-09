import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import useHead from '../../hooks/useHead'
import RegisterNewUser from './RegisterNewUser'
import LoginUser from './LoginUser';
import Button from '../../components/Button';
import { LoginAnimateToRight, ForgotPassword, Subtitle, LoginImage } from './login.styles'
import Title from '../../components/Title'

const Login	= () => {
    useHead('Login')
    return (
        <div style={{display: 'flex', overflowX: 'hidden'}}>
        <LoginImage />
        <LoginAnimateToRight>
            <Title>Login</Title>
                <Routes>
                    <Route path='/' element={<LoginUser />} />
                    <Route path='recuperar-senha' element={<p>Rota para recuperar senha</p>} />
                    <Route path='cadastro' element={<RegisterNewUser />} />
                </Routes>
                <>

                    <Link to="recuperar-senha">
                            <ForgotPassword>Recuperar Senha</ForgotPassword>
                    </Link>
                    <Subtitle>Cadastrar Usuário</Subtitle>
                    <p>Se não tem um usuário ainda, faça-o clicando no botão abaixo</p>
                    <Link to="cadastro">
                        <Button style={{marginRight: '1rem'}}>
                            Cadastrar novo usuário
                        </Button>
                    </Link>

                </>
        </LoginAnimateToRight>
        </div>
    )
}

export default Login