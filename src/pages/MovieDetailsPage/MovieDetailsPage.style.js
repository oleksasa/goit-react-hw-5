import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLinkCast = styled(Link)`
  color: black;
  font-size: 40px;
  margin-right: 20px;

  &:active {
    color: red;
  }
`;

export const StyledLinkReviews = styled(Link)`
  color: black;
  font-size: 40px;

  &:active {
    color: red;
  }
`;
