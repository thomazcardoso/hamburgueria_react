import { useState, useEffect } from "react";
import { StyledButton } from "../../styles/button";

export const SearchInput = ({ setSearch, searchAndFilteredProducts }) => {
  const [searchInput, setSearchInput] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchInput);
    setSearchInput("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="search"
          placeholder="Digitar Pesquisa"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        />
        <StyledButton type="submit">Pesquisar</StyledButton>
      </form>
    </div>
  );
};
