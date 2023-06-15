import { HeaderCont, Link, ListNav, NavItem } from "./Navigation.styled"
import { ReactComponent as LogoPet } from '../../assets/logoPet.svg';
import { useResponce } from "../hooks/response/response";
import { NavLink } from "react-router-dom";
const Navigation = () => {
    const {isDesktop, isTablet, isMobile} = useResponce()
    console.log(isDesktop) 
    return (
        <>
        <HeaderCont isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}>
            <LogoPet />
            {isDesktop && 
            <ListNav>
                <NavItem>
                    <Link to={'/yourPet'}>Find Pet</Link>
                </NavItem>
                <NavItem>
                    <Link to={'/'}>хрен</Link>
                </NavItem>
            </ListNav>}
            
            {/* <div>
                <p>Man</p>
            </div> */}
        </HeaderCont>
        </>
    )
}

export default Navigation