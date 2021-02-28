import { Link } from "react-router-dom"
import { NavStyled } from './header.styles'
import { ReactComponent as DogsLogo } from '../../assets/dogs.svg'

const Header = () => {
    const { Nav, NavItem } = NavStyled;
    return(
        <Nav>
            <Link to="/">
                <DogsLogo style={{position: 'absolute', left: '1rem', top: '20%'}}/>
            </Link>
            <Link to="/login">
                <NavItem name="login">Login / Criar</NavItem>
            </Link>
        </Nav>
    )
}

export default Header