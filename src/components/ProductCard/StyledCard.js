import styled from "styled-components";

export const StyledCard = styled.li`
    height: 346px;
    width: 300px;
    border: 2px solid var(--grey-20);
    display: flex;
    border-radius: 5px;
    gap: 1rem;
    width: 300px;

    figure{
        display: flex;
        justify-content: center;
        background-color: var(--grey-0);
    }

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    
    }

    :hover{
        scale: 1.025;
    }

    .product__info{
        height: 100%;
        margin: 13px 10px;

        h3{
            font-weight: 700;
            font-size: 1.125rem;

        }

        small{
            font-weight: 400;
            font-size: 0.75rem;
            color: var(--grey-50);

        }

        p{
            color: var(--color-primary);
            font-weight: 600;
            font-size: 0.875rem;
        }
    }



`