import { Field, Form } from "formik";
import styled from "styled-components";
import { BiFemaleSign } from 'react-icons/bi';
import { GiMale } from 'react-icons/gi';

export const FormMore = styled(Form)`
display: flex;
flex-direction: column;

`
export const DopelCont = styled.div`
@media (min-width: 768px) {
display: flex;

}  
`

export const ContFirst = styled.div`
@media (min-width: 768px) {
    width: 30%;
}    
`
export const ContSecond = styled.div`
@media (min-width: 768px) {
    width: 70%;
    margin-left: 45px;
}    
`

export const ContThird = styled.div`

@media (max-width: 767px){
    margin-top: 24px;
display: flex;
flex-direction: column;
align-items: center;
}

@media (min-width: 768px) {
    margin-top: 60px;
    height: 40px;
    width: 250px;
    margin: 0 auto;
    margin-top: 60px;
} 
`

export const Label = styled.label`
font-family: "ManropeMedium";
font-weight: 500;
font-size: 14px;
text-align: start;
display: flex;
justify-content: start;
flex-direction: column;
color: #111111;
@media (max-width: 767px) {
    margin-bottom: 4px;
}
@media (min-width: 768px) {
    margin-bottom: 8px;
}
`
export const Input = styled(Field)`
width: 100%;
height: ${props => props.comment === 'comment' ? '92px' : '40px' };
padding: 8px 16px;
border: 1px solid #54ADFF;
border-radius: ${props => props.comment === 'comment' ? '20px' : '40px' };
margin-top: ${p => p.isMobile ? '4px' : '8px'};
`

export const LabelImage = styled.label`
font-family: "ManropeMedium";
font-weight: 500;
font-size: 14px;
display: flex;
justify-content: start;
align-items: center;
color: #111111;
@media (max-width: 479px) {
    display: flex;
justify-content: start;
align-items: center;

}

@media (max-width: 767px) {
    font-size: 20px;
    padding: 16px 0;
}
@media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    p {
        margin-right: 0;
        margin-bottom: 8px;
        margin-right: auto;
    }
}
`


export const ButtonSex = styled.button`
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
padding: 4px 8px;
background: transparent;
transition: all 250ms;
color: #888888;
border: none;
cursor: pointer;
background-color: ${(props) => (props.active ? '#CCE4FB' : 'transparent')};
color: ${(props) => (props.active ? '#00C3AD' : '#888888')};
&:hover, &:focus {
    border: 1px solid #CCE4FB;
}


`

export const Female = styled(BiFemaleSign)`
width: 24px;
height: 24px;
color: ${(props) => (props.active ? '#F43F5E' : '#888888')};
margin-right: 4px;
`
export const Male = styled(GiMale)`
width: 24px;
height: 24px;
color: ${(props) => (props.active ? 'blue' : '#888888')};
margin-right: 4px;
`


export const TextTitleImg = styled.p`
@media (max-width: 479px) {
    text-align: start;
    font-size: 16px;
    width: 81px;
    margin-right: 14px;
}
@media (min-width: 480px) {
    margin-right: 16px;
}
`