import styled from "styled-components";
import { MdOutlineDeleteSweep } from 'react-icons/md';

export const Title = styled.div`
font-family: 'ManropeMedium';
font-weight: 500;
font-size: 28px;
line-height: 38px;

text-align: start;
`




export const Wrapper = styled.div`
    width: 100%;
    outline: 2px solid green;
    @media (min-width: 1279px){
        width: 70%;
    }
`
export const ListPets = styled.ul`
    @media (min-width: 1279px) {
        overflow-y: scroll;
        height: 500px;
        &::-webkit-scrollbar {
  width: 0.5em; /* Ширина скроллбара */
}

&::-webkit-scrollbar-thumb {
  background-color: #888; /* Цвет ползунка скроллбара */
}

&::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Цвет ползунка скроллбара при наведении */
}
    }

`
export const ItemPets = styled.li`
height: auto;
display: flex;
border-radius: 20px;
background: #FFF;
box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
& + & {
        margin-top: 20px;
    }
@media (max-width: 767px){
    flex-direction: column;
align-items: center;
padding: 16px 20px;
}
    padding: 20px;
`
export const ContImg = styled.div`
@media (max-width: 767px){
    
    margin-bottom: 20px;
}
@media (min-width: 768px){
    margin-right: 20px;
}
    
    img {
        border-radius: 20px;
        @media (max-width: 767px){
    width: 240px;
    height: 240px;
    
}
        @media (min-width: 768px){
        width: 164px;
        height: 164px;
}
    }
`

export const ContInfo = styled.div`

position: relative;
    text-align: start;
    margin-right: auto;
    width: 100%;
`
export const ListInfo = styled.ul`
    
`
export const ItemInfo = styled.li`
display: ${p => p.comment === 'comment' ? '' : 'flex'};

&:not(:last-child){
    margin-bottom: 12px;
    @media (min-width: 768px){
        margin-bottom: 16px;
    }
}
    p {
        color: #000;
    font-size: 14px;
    letter-spacing: 0.56px;
    font-family: 'ManropeBolt';
    @media (max-width: 767px) {
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.56px;
    }
    
    @media (min-width: 768px){
        display: ${p => p.comment === 'comment' ? 'inline-block' : ''};
        font-weight: 600;
        line-height: 18px;
        }
    }
    span {
        font-size: 14px;
        font-family: 'ManropeMedium';
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.56px;
    }
`
export const ButtonDelete = styled.button`
    position: absolute;
    right: 0;
    top: -8px;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 24px;
height: 24px;
`

export const IconDelete = styled(MdOutlineDeleteSweep)`
width: 24px;
height: 24px;
fill: #54ADFF;
`