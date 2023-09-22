import React from "react";
import { StyledCart, StyledCartTotal } from "../Cart/StyledCart";

export const CartTotal = ({currentSale, products, clearCart }) => {
  const cartTotal = currentSale.reduce((counter, product) => counter + product.price , 0)
  
  if(currentSale.length === 0){
    return null;
  } else {
    return (
      <>
        <StyledCartTotal>
          <h4>Total: <span>R$ {cartTotal.toFixed(2)}</span></h4>
        <button className="remove__all" onClick={clearCart}>Remover todos</button>
        </StyledCartTotal>
      </>
    );

  }

};
