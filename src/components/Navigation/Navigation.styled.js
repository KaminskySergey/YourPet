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