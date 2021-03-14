import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RegisterNewUser from './RegisterNewUser';
import LoginUser from './LoginUser';
import Button from '../../components/Button';
import { LoginAnimateToRight, ForgotPassword, Subtitle, LoginImage } from './login.styles';
import RecoverPassword from './RecoverPassword';

const Login	= () => {
    
    return (
        <div style={{display: 'flex'}}>
        <LoginImage />
        <LoginAnimateToRight>
           
                <Routes>
                    <Route path='/' element={<LoginUser />} />
                    <Route path='recuperar-senha' element={<RecoverPassword />} />
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