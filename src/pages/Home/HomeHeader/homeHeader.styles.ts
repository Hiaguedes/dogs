import styled, { css } from 'styled-components';

interface ButtonProps {
    src: string;
}

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
    cursor: pointer;
`;

const HomeHeaderButton = styled.button<ButtonProps>`
    outline: none;
    border: 1px solid transparent;
    display: inline-flex;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 5%;
    background-size: cover;
    border-radius: 2px;
    ${({src}) => src && css`background: url(${src}) no-repeat center;`}
    background-color: #e0e0e0;
    box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
`

export const HomeHeaderStyles = { HomeHeaderContainer, HomeHeaderLink, HomeHeaderButton }