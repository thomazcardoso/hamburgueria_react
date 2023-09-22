import styled from "styled-components";

export const StyledCartProduct = styled.li`
   div{
         display: flex;
         align-items: center;
         justify-content: space-between;

         img{
            height: 80px;
            background-color: var(--grey-20);
            border-radius: 5px;
         }

         h3{
            font-weight: 700;
            font-size: 1.125rem;
            color: var(--grey-100);

            p{
                font-weight: 400;
            font-size: 0.75rem;
            color: var(--grey-50);
            margin-top: 1rem ;
            }

         }

         button{
            font-weight: 500;
            font-size: 0.75rem;
            color: #BDBDBD;
;
         }
   }`