import styled from "styled-components";

import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        {/* <li> */}
        {/* <StyledNavLink>
            <HiOutlineHome />

            <span> Func1 </span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <HiOutlineHome />

            <span> Func2 </span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/Therapists">
            <HiOutlineHome />

            <span> Therapists </span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink>
            <HiOutlineHome />

            <span> func 4 </span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <HiOutlineHome />

            <span> func 5 </span>
          </StyledNavLink>
        </li> */}
      </NavList>
    </nav>
  );
}

export default MainNav;
