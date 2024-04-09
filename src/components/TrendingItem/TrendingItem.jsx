import React from "react";

import * as S from "./TrendingItem.style";

const TrendingItem = ({ id, name }) => {
  return (
    <>
      <li>
        <S.ListLink to={`/movies/${id}`}>{name}</S.ListLink>
      </li>
    </>
  );
};

export default TrendingItem;
