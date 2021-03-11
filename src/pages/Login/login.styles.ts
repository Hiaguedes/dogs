import styled from 'styled-components';
import LoginImageBackground from '../../assets/login.jpg'

export const LoginAnimateToRight = styled.div`
    @keyframes animeLeftToRight {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }

        to { 
            opacity: 1;
            transform: translateX(initial);
        }
    }

    animation: animeLeftToRight 0.3s forwards;
    max-width: 30rem;
    padding: 0 2rem;
    width: calc(50% - 4rem);
    margin: 0 auto;
    overflow: hidden;
`;

export const ForgotPassword = styled.p`
    color: #666;
    display: inline-block;
    padding: 0;
    position: relative;

    ::after {
        content: '';
        height: 2px;
        width: 100%;
        background-color: currentColor;
        display: inline-block;
        position: absolute;
        top:110%;
        left:0;
    }
`;

export const Subtitle = styled.h3`
        font-family: 'Spectral', serif;
    line-height: 1;
    font-size: 1.5rem;
    margin: 1rem 0;
    position: relative;
    margin: 3rem 0 1rem 0;
    position: relative;

    ::before {
        content: '';
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 10%;
        background-color: #fb1;
        position: absolute;
        bottom: 0;
        z-index: -1;

    }
`;

export const LoginImage = styled.div`
    width: 45%;
    height: calc(100vh - 3rem );
    overflow: hidden;
    background: url(${LoginImageBackground}) no-repeat center;
    background-size: cover;
    display: inline-block;

    @media(max-width: 900px) {
        display: none;
    }

`;
