import { HeaderCont } from "./Navigation.styled"
import { ReactComponent as LogoPet } from '../../assets/logoPet.svg';
import { useResponce } from "../hooks/response/response";
const Navigation = () => {
    const {isDesktop, isTablet, isMobile} = useResponce()
    console.log(isDesktop) 
    return (
        <>
        <HeaderCont isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}>
            <LogoPet />
        </HeaderCont>
        </>
    )
}

export default Navigation