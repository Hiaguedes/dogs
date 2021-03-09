import { Link } from "react-router-dom"
import { NavStyled } from './header.styles'
import { ReactComponent as DogsLogo } from '../../assets/dogs.svg';
import { useLoginContext } from '../../contexts/LoginContext'
import Button from '../Button'

const Header = () => {
    const { Nav, NavItem } = NavStyled;
    const { userData, logOut } = useLoginContext();
    return(
        <Nav>
            <Link to="/">
                <DogsLogo style={{position: 'absolute', left: '1rem', top: '20%'}}/>
            </Link>
               {userData.nome?
               <>
               <Button onClick={() => {logOut()}}>Logout</Button>
               <Link style={{marginRight: '1rem'}} to="/home">
                   {userData.nome}
                </Link>
                </>
                :
               <Link to="/login">
                    <NavItem name="login">Login / Criar</NavItem>
                </Link>
            }
        </Nav>
    )
}

export default Header