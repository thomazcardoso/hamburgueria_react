import styled from "styled-components";

export const StyledContainer = styled.main`
        display: flex;
        width: 100%;
        max-width: 1400px;
        padding: 10px;
        margin: 0 auto;
        flex-direction: column;

        @media (width > 1300px){
            flex-direction: row ;
            justify-content: space-between;
        }

        @media (width < 400px){
            max-height: 100vh;
        }
    `

