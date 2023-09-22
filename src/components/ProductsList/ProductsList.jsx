import { toast } from "react-toastify";
import { ProductCard } from "../ProductCard/ProductCard";
import { StyledDivUl, StyledProductList } from "./StyledProductList";


export const ProductsListComponent = ({ products, addToCurrentSale, searchAndFilteredProducts, search, setSearch, setFilteredProducts }) => {
  const currentProductsList = search === "" ? products : searchAndFilteredProducts;
  
  
  return (
    <StyledDivUl>
    <StyledProductList>
      {currentProductsList.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            addToCurrentSale={addToCurrentSale}
            toast={toast}
          />
        );
      })}
    </StyledProductList>
    </StyledDivUl>
  );
};
