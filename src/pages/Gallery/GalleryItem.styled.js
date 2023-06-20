import styled from "styled-components";
import { ReactComponent as AnimalPaw } from '../../assets/animalPaw.svg';

export const Item = styled.li`
position: relative;
height: 456px;
  
  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 0px 0px 40px 40px;
  flex-grow: 1;
  width: 288px;
  @media (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    
  }
  
  @media (min-width: 768px) {
    margin: 16px;
    max-width: 336px;
            width: calc((100% - 64px) / 2);
  }
  
  @media (min-width: 1280px) {
    width: 288px;
  }
`

export const ContainerImg = styled.div`
  height: 288px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;


export const Title = styled.h2`
width: 231px;
height: 66px;

  font-family: 'ManropeBolt';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
color: #111111;
margin-bottom: 20px;
text-align: start;

`

export const Button = styled.button`
width: 248px;
height: 38px;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 28px;

  border: ${p => !p.isPaw ? '2px solid #54ADFF' : 'none'};
border-radius: 40px;
background: ${p => p.isPaw ? '#54ADFF' : 'transparent'};
margin: 0 auto;
cursor: pointer;
/* @media (min-width: 768px) and (max-width: 1279px) {
  margin: 0 auto;
} */
`

export const ButtonText = styled.p`
font-family: 'ManropeBolt';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
margin-right: 12px;

color: ${p => p.isPaw ? '#FEF9F9' : '#54ADFF'};
`

export const ListIcons = styled.ul`
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    display: flex;
    justify-content: space-between;
`

export const ItemIcons = styled.li`
  width: 80px;
  height: 28px;
  background-color: #CCE4FB;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
export const TextIcons = styled.p`
  font-family: 'ManropeSemiBolt';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #111111;
margin-left: 4px;
`

export const LogoPaw = styled(AnimalPaw)`
width: 24px;
height: 24px;
`