import styled from 'styled-components';

const Title = styled.h2`
    font-family: 'Spectral', serif;
    font-weight: 800;
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    margin-bottom: 3rem;
    position: relative;

    ::before {
        content: '';
        display: inline-block;
        width: 2rem;
        height: 2rem;
        border-radius: 10%;
        background-color: #fb1;
        position: absolute;
        bottom: 0;
        z-index: -1;

    }
`

export default Title