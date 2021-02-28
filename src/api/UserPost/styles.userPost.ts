import styled from 'styled-components';

const Input = styled.input`
    display: block;
    border:transparent;
    border-bottom: solid 2px lightgray;
    padding: 0.5rem;
    height: 2rem;
    font-size: 1.2rem;
    width: 20%;
    margin: 1rem 0.5rem;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #90f;
    color: #f1f1f1;
    text-transform: uppercase;
    display: inline-block;
`;

export const UserPostStyles = { Input, Button }