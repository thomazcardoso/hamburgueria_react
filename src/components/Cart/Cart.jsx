import { CartProduct } from "../CartProduct/CartProduct";
import { CartContainer, StyledCart } from "./StyledCart";


export const Cart = ({ productId, products, removeProductFromCart, currentSale }) => {

  return (
    <>
    <StyledCart>
      <div className="cart__header">
        <h4>Carrinho de compras</h4>
      </div>
      <div className="cart__container">
    {currentSale.length > 0 ? (
      <ul>
        {currentSale.map((product) => {
          return (
            <CartProduct
              key={product.id}
              productId={product.id}
              products={products}
              removeProductFromCart={removeProductFromCart}
            />
          );
        })}
      </ul>
    ) : (
      
      <div>
      <h3>
        Sua sacola está vazia
      </h3>
        <small>Adicione itens</small>
        </div>
    )}
    </div>
    </StyledCart>
    </>
  );
};
