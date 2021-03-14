import React from 'react';
import useFetch from '../hooks/useFetch';
import { loginRoutes  } from '../utils/apiRoute';
import { createBrowserHistory } from 'history'

const initialState = {
    token: '',
    isLogged: false,
    userData: {
        id: '',
        username: '',
        nome: '',
        email: '',
    },
    setLoginToken: (token: string) => {},
    setUser: (objUser: {}) => {},
    logOut: () => {},
    setLogged: () => {},
}
interface DefaultProps {
    token: string;
    isLogged: boolean;
    userData: {
        id: string,
        username: string,
        nome: string,
        email: string,
    };
    setLoginToken: (token: string) => void;
    setUser: (objUser: {}) => void;
    logOut: () => void;
    setLogged: any;
}

interface LoginProviderProps {
    children: React.ReactNode;
}

const LoginContext = React.createContext<DefaultProps>(initialState);

const LoginProvider = ({children}: LoginProviderProps) => {
    const { request } = useFetch();
    const [token, setToken] =React.useState('');
    const [ isLogged, setLogged ] = React.useState(false);
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
        setLogged(false);
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
                request(loginRoutes.validateToken.url, loginRoutes.validateToken.options(appToken))
                .then((res: {response: any}) => {
                    if(!res.response.ok as boolean) {
                        logOut();
                        history.push('/login')
                        return
                    };
                    setLoginToken(appToken);
                    request(loginRoutes.getUser.url,loginRoutes.getUser.options(appToken)).then(res => {
                        setUser(res.json)
                        setLogged(true)
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
        <LoginContext.Provider value={{token, setLoginToken, userData ,setUser, logOut, isLogged, setLogged}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider

export const useLoginContext = () => React.useContext(LoginContext)