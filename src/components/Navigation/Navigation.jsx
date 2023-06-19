import { HeaderCont, ItemButton, LinkAuth, Link, ListButton, ListNav, NavItem } from "./Navigation.styled"
import { ReactComponent as LogoPet } from '../../assets/logoPet.svg';
import { ReactComponent as Paw } from '../../assets/animalPaw.svg';
import { useResponce } from "../hooks/response/response";

import Modal from "../Modal/Modal";
import { useState } from "react";
import styled from "styled-components";




const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {isDesktop, isTablet, isMobile} = useResponce()
    console.log(isDesktop) 
    const handleToggle = () => {
        setIsOpen(pS => !pS)
    }
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
            
            <div>
                <Link to={'./myAccount'}>Man</Link>
            </div>
            <ListButton>
            <ItemButton>
                    <LinkAuth to={'/login'}>
                        Log IN
                        <Paw style={{marginLeft: '8px'}}/>
                    </LinkAuth>
                </ItemButton>
                <ItemButton>
                    <LinkAuth to={'/register'}>
                        Registration
                    </LinkAuth>
                </ItemButton>
            </ListButton>
        </HeaderCont>
        {/* {isOpen && <Modal />} */}
        </>
    )
}

export default Navigation