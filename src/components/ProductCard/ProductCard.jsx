import { useState } from "react";
import { StyledButton } from "../../styles/button";
import { StyledCard } from "./StyledCard";
import { toast } from "react-toastify";

export const ProductCard = ({ product, addToCurrentSale }) => {
  const handleAddToCart = (productId) => {
    addToCurrentSale(productId);
  };

  return (
    <StyledCard toast={toast}>
      <div>
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
        <div className="product__info">
          <h3>{product.name}</h3>
          <small>{product.category}</small>
          <p>R$ {product.price}</p>
          <StyledButton
            onClick={() => handleAddToCart(product.id)}
            id={product.id}>
            Adicionar
          </StyledButton>
        </div>
      </div>
    </StyledCard>
  );
};
