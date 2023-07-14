import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div``;

export const Global = createGlobalStyle`
    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    h2{
        margin-bottom: 20px;
    }
`;
