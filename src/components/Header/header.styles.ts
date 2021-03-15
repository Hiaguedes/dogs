import styled, { css } from 'styled-components';
import user from '../../assets/usuario.svg'

interface NavItemProps {
    name?: string;
}

const Nav = styled.nav`
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    top: 0;
    position: sticky;
    display: inline-flex;
    background-color: #e5e5e5;
    height: 2rem;
    box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
    padding: 0.5rem 0;
    z-index: 10;
`

const NavItem = styled.div<NavItemProps>`
    margin-right: 1rem;
    display: flex;
    align-items: center;

    ${({name}) =>
    name  &&
    css`
        ::after {
            content: '';
            margin-left: 0.5rem;
            display: inline-block;
            width: 16px;
            height: 16px;
            background: url(${user}) no-repeat center;
        }
    `}
`

export const NavStyled = { Nav, NavItem }