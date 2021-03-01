import styled, { css } from 'styled-components';
import { memo } from 'react'
const Button = styled.button`
    width: 15rem;
    height: 3rem;
    border-radius: 0.4rem;
    background-color: #fb1;
    color: #764701;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 0;
    cursor: pointer;
    transition: 0.2s;

    :hover,:focus {
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
        border: 1px solid rgba(0,0,0,0.2);
    }

    ${({disabled}) => disabled && css`
        opacity: 0.5;
        cursor: not-allowed;
    `}
`;

export default memo(Button);