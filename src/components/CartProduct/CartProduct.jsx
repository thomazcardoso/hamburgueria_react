import { StyledCartProduct } from "./StyledCartProduct";

export const CartProduct = ({ productId, products, removeProductFromCart }) => {
  const product = products.find((p) => p.id === productId);
  const handleRemoveFromCart = (productId) => {
    removeProductFromCart(productId);
  };

  return (
    <StyledCartProduct>
      <div>
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
        <h3>
          {product.name}
          <span>
            <p>{product.category}</p>
          </span>
        </h3>

        <button className="card__remove"
          onClick={() => {
            handleRemoveFromCart(product.id);
          }}
          id={product.id}>
          Remover
        </button>
      </div>
    </StyledCartProduct>
  );
};
