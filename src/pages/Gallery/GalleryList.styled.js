import styled from "styled-components";

export const List = styled.ul`
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Автоматические колонки, каждая не меньше 280px */
  grid-gap: 16px; /* Отступ между карточками */
  
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-direction: column;
     /* Увеличьте количество колонок на маленьком разрыве */
    gap: 24px; /* Увеличьте отступ на маленьком разрыве */
  }
  
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -16px;/* Разрыв между карточками */
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr); /* Четыре колонки на разрыве 1280px */
    
  }
padding-top: 102px;
`