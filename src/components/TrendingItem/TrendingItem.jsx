import React from "react";

import * as S from "./TrendingItem.style";
import { useLocation } from "react-router-dom";

const TrendingItem = ({ id, name }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <S.ListLink
        state={{
          pathname,
        }}
        to={`/movies/${id}`}
      >
        {name}
      </S.ListLink>
    </li>
  );
};

export default TrendingItem;
// перейменуй файли
