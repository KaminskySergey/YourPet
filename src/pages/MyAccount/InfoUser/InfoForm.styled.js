import { Field } from "formik"
import styled from "styled-components"
import { BsPencil } from 'react-icons/bs';

export const Label = styled.label`
position: relative;
    font-family: 'ManropeSemiBolt';
    width: 100%;
font-weight: 600;
font-size: 18px;
line-height: 25px;
text-align: start;
display: flex;
align-items: center;
justify-content: space-between;
letter-spacing: 0.04em;
    & + & {
        margin-top: 8px;
    }
`

export const Input = styled(Field)`
    width: 76%;
    height: 32px;
    padding: 4px 12px;
    border: 1px solid #54ADFF;
border-radius: 20px;
margin-left: 16px;
`

export const IconEdit = styled(BsPencil)`
position: absolute;
right: 8px;
width: 24px;
height: 24px;
fill: #54ADFF;
`