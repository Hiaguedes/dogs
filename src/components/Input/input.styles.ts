import styled, { css } from 'styled-components';
import warningImg from '../../assets/warning.svg';

interface InputProps {
    errorMessage?: string;
}

const InputBase = styled.input<InputProps>`
    display: block;
    border:transparent;
    border-bottom: solid 2px lightgray;
    padding: 0.2rem 0.5rem;
    height: 2rem;
    font-size: 1.2rem;
    width: 95%;
    margin: 1rem 0.5rem;
    display: flex;
    align-items: center;

    :hover, :focus {
        border-bottom: 2px solid #fb1;
    }

    ${({errorMessage}) => errorMessage && css`
        border-bottom: solid 2px #f35;
        color: #f35;

    :hover, :focus {
        border-bottom: 2px solid #f35;
    }

    ::placeholder {
        color: #f35;
    }
    `}
`;

const ErrorMessage = styled.p`
        color: #f35;
        font-size: 18px;
        padding: 0 0.5rem;

        :after{
            content: '';
            display: inline-block;
            width: 16px;
            height: 16px;
            background: url(${warningImg}) center no-repeat;
            fill: #f35;
            z-index: 1000;
            margin-left: 0.5rem;
        }

`;

export const InputStyles = { InputBase, ErrorMessage };


//erro #f35