import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { ProductsListComponent } from "./components/ProductsList/ProductsList";
import { Cart } from "./components/Cart/Cart";
import { CartTotal } from "./components/CartTotal/CartTotal";
import { GlobalStyle } from "./styles/global";
import { CartProduct } from "./components/CartProduct/CartProduct";
import { SearchInput } from "./components/Search/InputSearch";
import { StyledContainer } from "./styles/container";
import {
  CartContainer,
  StyledCart,
  StyledCartTotal,
} from "./components/Cart/StyledCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./Services/api";

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");

  const loadProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadProducts();
  }, []);

  const addToCurrentSale = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (currentSale.some((product) => product.id === productId)) {
      toast.warning("O produto já está no carrinho");
    } else {
      const newCurrentSale = [...currentSale, productToAdd];
      setCurrentSale(newCurrentSale);
      toast.success("Produto adicionado ao carrinho!");
    }
  };

  const removeProductFromCart = (productId) => {
    const newCurrentSale = currentSale.filter(
      (product) => product.id !== productId
    );
    setCurrentSale(newCurrentSale);
  };

  const clearCart = () => {
    setCurrentSale([]);
  };

  const searchAndFilteredProducts = products.filter(
    (filteredResults) =>
      filteredResults.name.toLowerCase().includes(search.toLowerCase()) ||
      filteredResults.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Header
        setSearch={setSearch}
        searchAndFilteredProducts={searchAndFilteredProducts}
      />
      <StyledContainer>
        <ProductsListComponent
          products={products}
          addToCurrentSale={addToCurrentSale}
          searchAndFilteredProducts={searchAndFilteredProducts}
          search={search}
          setSearch={setSearch}
          setFilteredProducts={setFilteredProducts}
          toast={toast}
        />
        <CartContainer>
          <Cart
            currentSale={currentSale}
            products={products}
            removeProductFromCart={removeProductFromCart}
          />
          <CartTotal
            clearCart={clearCart}
            currentSale={currentSale}
            products={products}
          />
        </CartContainer>
      </StyledContainer>
    </>
  );
}

export default App;

// Comment to fork
// jkbfvkrfb
