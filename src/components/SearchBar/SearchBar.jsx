import React, { useState } from "react";

import * as S from "./SearchBar.style";

const SearchBar = ({ onSubmit, query }) => {
  const [value, setValue] = useState(query ?? "");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleChange}
        value={value}
      />
      <S.ButtonInput type="submit">Search</S.ButtonInput>
    </form>
  );
};

export default SearchBar;
