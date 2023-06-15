import styled from "styled-components";


export const HeaderCont = styled.div`
  width: 100%;
  height: 50px;
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
      return '30px 16px 16px';
    } else if (props.isTablet) {
      return '32px  32px 32px';
    } 
  }};
`;