import styled from "styled-components";

export const StyledDivUl = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: row;
  height: 400px;
  overflow-x: auto;

    @media(width > 960px){
        
        width: fit-content;
        height: 740px;
        overflow-x: hidden;
    }

    
`;


export const StyledProductList = styled.ul`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin-top: 25px;
  flex-wrap: nowrap;

    @media (width > 960px) {
        flex-wrap: wrap;
    }

  img {
    height: 177px;
    width: 177px;
    justify-self: center;
  }
`;
