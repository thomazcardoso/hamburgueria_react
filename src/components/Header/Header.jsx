import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { SearchInput } from "../Search/InputSearch";
import { StyledHeader } from "./StyledHeader";

export const Header = ({ setSearch, searchAndFilteredProducts }) => {
  return (
    <StyledHeader>
      <nav>
        <figure>
          <img src={logo} alt="Logo Kenzie Burguer" />
        </figure>
        <div>
          <SearchInput
            setSearch={setSearch}
            searchAndFilteredProducts={searchAndFilteredProducts}
          />
        </div>
      </nav>
    </StyledHeader>
  );
};
