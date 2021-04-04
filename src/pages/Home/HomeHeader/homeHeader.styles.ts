import styled, { css } from 'styled-components';

const HomeHeaderContainer = styled.div`
    width: 90%;
    max-width: 80rem;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    align-items: center;

`;

const HomeHeaderLink = styled.p`
    margin-right: 1rem;
    display: inline-blocks;

    @media(max-width: 40rem) {
        margin: 0;
    }
`;

interface MobileProps {
    mobile?: boolean
}

const HomeHeaderButton = styled.button<MobileProps>`
    outline: none;
    border: 1px solid transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: #e0e0e0;
    box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
    cursor: pointer;

    ${({mobile}) => mobile && css`
        background-color: #fff;
        width: 100%;
        justify-content: space-around;
        border: none;
        padding: .5rem 0;
        border-bottom: .5px #eee;
    `}

    :hover, :focus, :active {
        background-color: white;
        border: 1px solid #fb1;
        
        svg > * {
            fill: #fb1;
        }

    }
`

interface MenuIconProps {
    active: boolean;
}

const MenuIcon = styled.div<MenuIconProps>`
    width: 1.2rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: .2s;

    ${({active}) => active && css`
        width: 4px;
        height:: 4px;
        border-radius: 50%;
        transform: rotate(90deg);
        box-shadow: 0 8px currentColor, 0 -8px currentColor;
        transition: .2s;
    `}

    :focus {
        color: #fb1;
    }
`;

const NavMobile = styled.div`
    width: 200px;
    position: absolute;
    top: 50px;
    right: 0px;
    border: 1px solid #eee;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;

`


export const HomeHeaderStyles = { HomeHeaderContainer, HomeHeaderLink, HomeHeaderButton, MenuIcon, NavMobile }