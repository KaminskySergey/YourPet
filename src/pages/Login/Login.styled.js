import { Field } from "formik"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Title = styled.h2`
font-family: 'ManropeMedium';
font-weight: 500;
font-size: 24px;
line-height: 33px;
margin-bottom: 40px;
@media (min-width: 768px) {
font-size: 36px;
line-height: 49px;
letter-spacing: 0.04em;
}
`

export const Label = styled.label`
    font-family: 'ManropeSemiBolt';
    width: 100%;
font-weight: 600;
font-size: 18px;
line-height: 25px;
text-align: start;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;
& + & {
        margin-top: 24px;
    }
    @media (min-width: 768px) {
        & + & {
        margin-top: 32px;
    }
    }
`


export const Input = styled(Field)`
    width: 100%;
    height: 48px;
    padding: 12px 16px;
    border: 1px solid #54ADFF;
    border-radius: 40px;
    letter-spacing: 0.04em;
    font-family: 'ManropeMedium';
font-weight: 400;
font-size: 16px;
line-height: 150%;

color: #888888;

`

export const Button = styled.button`
width: 100%;
height: 48px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 28px;
background: #54ADFF;
border: none;
cursor: pointer;
border-radius: 40px;
margin-top: 40px;
font-family: 'ManropeSemiBolt';
font-weight: 600;
font-size: 20px;
line-height: 27px;
transition: all 250ms;
letter-spacing: 0.04em;
&:hover, &:focus {
        background-color: #183e61;
    }
/* Белый */

color: #FFFFFF;
@media (min-width: 768px) {
    margin-top: 60px;
}
`
export const Text = styled.p`
font-family: 'ManropeMedium';
font-weight: 400;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;
color: #888888;
`

export const LinkChange = styled(Link)`
    margin-left: 4px;
    color: #54ADFF;
    text-decoration: underline;
    transition: all 250ms;
    &:hover, &:focus {
        color: #183e61;
    }

`