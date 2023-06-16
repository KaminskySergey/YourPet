import styled from "styled-components";
import Box from "../../../components/Box/Box";
import InfoForm from "../InfoUser/InfoForm";
import { Button, LogOut } from "./InfoUser.styled";
import {ReactComponent as Face} from '../../../assets/face.svg'
import { useResponce } from "../../../components/hooks/response/response"

export const Container = styled.div`
    outline: 2px solid yellow;
    @media (min-width: 768px) {
        margin-bottom: 40px;
    }
    @media (min-width: 1280px) {
        height: 100%;
        margin-right: 32px;
        width: 30%;
    }
`

export const ContInfo = styled.div`
    width: 395px;
height: 520px;
background: #FFFFFF;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 40px;
height: 100%;
padding: 20px 16px;
@media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    height: 268px;
    padding: 20px 76px 21px 20px;
}
`
export const ContTitle = styled.div`
margin-bottom: 24px;
`
export const Title = styled.div`
font-family: 'ManropeMedium';
font-weight: 500;
font-size: 28px;
line-height: 38px;

text-align: start;
`
const InfoUser = () => {
    const {isTablet} = useResponce()
    return (
        <>
        <Container >
                <ContTitle>
                    <Title>My information:</Title>
                </ContTitle>
                <ContInfo style={{width: '100%', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', order: `${isTablet && 2}`, flexDirection: 'column'}}>
                    <Box style={{margin: '0 auto', display: 'flex', alignItems: 'end', justifyContent: 'center',  width: '182px', height: '182px', backgroundColor: '#54ADFF', borderRadius: '40px', marginBottom: '14px'}}>
                        <Face />
                    </Box>
                        <p style={{marginBottom: '24px'}}><span></span>Edit photo</p>
                    </div>
                    <div>
                    <InfoForm />
                    <Button><LogOut /><span>Log Out</span></Button>
                    </div>
                    
                </ContInfo>
            </Container>
        </>
    )
}


export default InfoUser;