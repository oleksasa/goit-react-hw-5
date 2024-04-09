import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 50px;

  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

