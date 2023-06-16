import styled from "styled-components";
import InfoUser from "./InfoUser/InfoUser";
import MyPets from "./MyPets/MyPets";

export const Container = styled.div`
    outline: 2px solid black;
    display: flex;
    /* @media (min-width: 768px){ */
        flex-direction: column;
    /* } */
    @media (min-width: 1280px){
        flex-direction: row;
    }
    /* flex-direction: ${({ isTablet }) => (isTablet ? 'column' : 'row')}; */
`

const MyAccount = () => {
    return (
        <>
        <Container  >
            
            <InfoUser />
            <MyPets />
        </Container>
        </>
    )
}

export default MyAccount;