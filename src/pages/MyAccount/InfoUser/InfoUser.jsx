
import Box from "../../../components/Box/Box";
import InfoForm from "../InfoUser/InfoForm";
import { Button, ContInfo, ContTitle, Container, LogOut, Title } from "./InfoUser.styled";
import {ReactComponent as Face} from '../../../assets/face.svg'
import { useResponce } from "../../../components/hooks/response/response"
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/thunkAuth";


const InfoUser = () => {
    const dispatch = useDispatch()
    const {isTablet} = useResponce()
    
    const handleLogout = () => dispatch(logout())

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
                    <Button onClick={handleLogout}><LogOut /><span>Log Out</span></Button>
                    </div>
                    
                </ContInfo>
            </Container>
        </>
    )
}


export default InfoUser;