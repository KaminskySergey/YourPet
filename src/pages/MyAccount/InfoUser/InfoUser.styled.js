import styled from "styled-components";
import { ReactComponent as Logout } from '../../../assets/logout.svg';

export const LogOut = styled(Logout)`

`
export const Button = styled.button`
font-family: 'ManropeMedium';
font-weight: 500;
font-size: 16px;
line-height: 22px;
border: none;
background-color: transparent;
cursor: pointer;
display: flex;
align-items: center;
letter-spacing: 0.04em;
transition: all 250ms;
color: #888888;
&:hover, &:focus span {
    color: #54ADFF;
}
span {
    margin-left: 12px;
}
`