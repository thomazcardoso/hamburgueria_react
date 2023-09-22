import styled from "styled-components";

export const CartContainer = styled.div`
display: flex;
flex-direction: column;


@media (width > 1420px){
  width: 365px;

}
`

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .cart__header {
    height: 65px;
    background-color: var(--color-primary);
    color: white;
    display: flex;
    align-items: center;
    padding-left: 21px;
    border-radius: 8px 8px 0px 0px;
  }

  .cart__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1.25rem;
    padding: 1.5rem;
    background-color: var(--grey-0);

    h3 {
      font-weight: 700;
      font-size: 1.125rem;
      margin: 2rem;
    }

    small {
      font-weight: 400;
      font-size: 0.875rem;
      color: var(--grey-50);
      margin: 2rem;
    }
  }

  .card__remove:hover{
    text-decoration: underline;
  }
`;

export const StyledCartTotal = styled.div`
  background-color: var(--grey-0);
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-direction: column;
  background-color: var(--grey-0);
  padding: 1.5rem;

  h4 {
    font-size: 0.875rem;
    font-weight: 600;

    span {
      color: var(--grey-50);
    }
  }

  .remove__all {
    height: 60px;
    background-color: var(--grey-20);
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: var(--grey-50);
    font-size: 1rem;
    margin: 28px 0px 0px 12px;
  }

  .remove__all:hover{
    background-color: var(--grey-50);
    transition: 0.5s;
    color: var(--grey-0);
  }
`;
