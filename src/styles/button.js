import styled from "styled-components";

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    height: 40px;
    width: 106px;

    background-color: var(--color-primary);
    color: white;
    border-radius: 8px;
    border: 2px solid var(--color-primary);

    :hover{
        background-color: var(--color-primary-50);
        transition: 0.5s;
        border: none;
    }

`