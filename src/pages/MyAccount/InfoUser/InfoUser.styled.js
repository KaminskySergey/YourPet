import styled from "styled-components";
import { ReactComponent as Logout } from '../../../assets/logout.svg';

export const Container = styled.div`
    outline: 2px solid yellow;
    @media (min-width: 768px) {
        margin-bottom: 40px;
    }
    @media (min-width: 1280px) {
        height: 100%;
        margin-right: 32px;
        width: 30%;
    }
`

export const ContInfo = styled.div`
    width: 395px;
height: 520px;
background: #FFFFFF;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 40px;
height: 100%;
padding: 20px 16px;
@media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    height: 268px;
    padding: 20px 76px 21px 20px;
}
`
export const ContTitle = styled.div`
margin-bottom: 24px;
`
export const Title = styled.div`
font-family: 'ManropeMedium';
font-weight: 500;
font-size: 28px;
line-height: 38px;

text-align: start;
`

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