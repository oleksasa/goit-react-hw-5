import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const StyledLinkCast = styled(NavLink)`
  color: black;
  font-size: 40px;

  &:active {
    color: red;
  }
`;

export const StyledLinkReviews = styled(NavLink)`
  color: black;
  font-size: 40px;

  &:active {
    color: red;
  }
`;

export const GoBack = styled(Link)`
  color: black;
  font-size: 40px;
  text-align: left;
`;
