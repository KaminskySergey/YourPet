import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
max-width: 1680px;
margin: 0 auto;
background-color: ${props => props.theme.background};

`

export const Header = styled.header`
    position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ECECEC;
`

export const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  text-align: center;
  /* display: flex;
  justify-content: center; */
  padding: ${(props) => {
    if (props.isDesktop) {
      return '148px 16px 16px';
    } else if (props.isTablet) {
      return '148px 32px 32px';
    } else if (props.isMobile) {
        return '88px 20px 20px'
    }
  }};
`;


