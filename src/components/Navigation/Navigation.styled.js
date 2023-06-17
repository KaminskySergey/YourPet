import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderCont = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  
  max-width: ${(props) => {
    if (props.isDesktop) {
      return '1680px';
    } else if (props.isTablet) {
      return '1024px';
    } else if (props.isMobile) {
      return '100%';
    }
  }};
  padding: ${(props) => {
    if (props.isDesktop) {
      return '30px 16px ';
    } else if (props.isTablet) {
      return '32px 32px ';
    } 
  }};
`;

export const ListNav = styled.ul`
margin-left: 159px;
display: flex;
justify-content: center;
align-items: center;


`
export const NavItem = styled.li`

& + & {
  margin-left: 40px;
}
`

export const Link = styled(NavLink)`
font-family: 'ManropeMedium';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #111111;
transition: all 250ms;
&:hover, &:focus {
  color: #FFC107;
}
&:active, &.active {
  color: #FFC107;
}
`

export const ListButton = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
`
export const ItemButton = styled.li`
  &:first-child {
    a {
      width: 165px;
      height: 40px;
      background: #FFC107;
      color: #FEF9F9;
    }
  }

  &:last-child {
    margin-left: 20px;
    a {
      width: 142px;
      height: 38px;
      border: 2px solid #FFC107;
      color: #FFC107;
    }
  }
`;

export const LinkAuth = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
padding: 8px 20px;
border: 2px solid #FFC107;
border-radius: 40px;
`