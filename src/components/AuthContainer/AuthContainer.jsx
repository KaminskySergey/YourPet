import styled from "styled-components"


const Container = styled.div`
  width: 100%;
  height: 440px;
  background: #FFFFFF;
opacity: 0.7;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 20px;
margin: 0 auto;
padding: 40px 12px;
padding: 60px 75px;
@media (min-width: 768px) {
    width: 608px;
height: 549px;

}
@media (min-width: 1280px) {
    width: 608px;
height: 537px;
}
`;

const AuthContainer = ({children}) => {
    
    return (
        <>
        <Container >
            {children}
        </Container>
        </>
    )
}

export default AuthContainer