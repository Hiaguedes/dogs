import React from 'react';
import useFetch from '../hooks/useFetch';
import { routes } from '../utils/apiRoute';
import { createBrowserHistory } from 'history'

const initialState = {
    token: '',
    userData: {
        id: '',
        username: '',
        nome: '',
        email: '',
    },
    setLoginToken: (token: string) => {},
    setUser: (objUser: {}) => {},
    logOut: () => {},
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
    logOut: () => void;
}

interface LoginProviderProps {
    children: React.ReactNode;
}

const LoginContext = React.createContext<DefaultProps>(initialState);

const LoginProvider = ({children}: LoginProviderProps) => {
    const { request } = useFetch();
    const [token, setToken] =React.useState('');
    const [userData, setUserData] = React.useState({
        id: '',
        username: '',
        nome: '',
        email: '',
    })
    const history = createBrowserHistory();

    const setLoginToken = (token: string) => {
        setToken(token);
    };

    const setUser = (objUser: {}) => {
        setUserData({...userData, ...objUser})
    }

    const logOut = () => {
        setToken('');
        setUserData({
            id: '',
            username: '',
            nome: '',
            email: '',
        });
        localStorage.removeItem('dogsToken');
        history.push('/login')
    }

    React.useEffect(() => {
        const appToken = localStorage.getItem('dogsToken');

        if(appToken) {
            try {
                request(routes.validateToken.url, routes.validateToken.options(appToken))
                .then((res: {response: any}) => {
                    if(!res.response.ok as boolean) {
                        logOut();
                        history.push('/login')
                        return
                    };
                    setLoginToken(appToken);
                    request(routes.getUser.url,routes.getUser.options(appToken)).then(res => {
                        setUser(res.json)
                        history.push('/home')
                    })
                })

            }
            catch(e) {
                console.error(e)
                logOut();
            }
        }
        // eslint-disable-next-line
    }, [request])

    return(
        <LoginContext.Provider value={{token, setLoginToken, userData ,setUser, logOut}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider

export const useLoginContext = () => React.useContext(LoginContext)