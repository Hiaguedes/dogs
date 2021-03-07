import React from 'react';

const initialState = {
    token: '',
    userData: {
        id: '',
        username: '',
        nome: '',
        email: '',
    },
    setLoginToken: (token: string) => {},
    setUser: (objUser: {}) => {}
}
interface DefaultProps {
    token: string;
    userData: {
        id: string,
        username: string,
        nome: string,
        email: string,
    };
    setLoginToken: (token: string) => void;
    setUser: (objUser: {}) => void;
}

interface LoginProviderProps {
    children: React.ReactNode;
}

const LoginContext = React.createContext<DefaultProps>(initialState);

const LoginProvider = ({children}: LoginProviderProps) => {
    const [token, setToken] =React.useState('');
    const [userData, setUserData] = React.useState({
        id: '',
        username: '',
        nome: '',
        email: '',
    })

    const setLoginToken = (token: string) => {
        setToken(token);
    };

    const setUser = (objUser: {}) => {
        setUserData({...userData, ...objUser})
    }

    return(
        <LoginContext.Provider value={{token, setLoginToken, userData ,setUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider

export const useLoginContext = () => React.useContext(LoginContext)