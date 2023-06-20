import { HeaderCont, ItemButton, LinkAuth, Link, ListButton, ListNav, NavItem } from "./Navigation.styled"
import { ReactComponent as LogoPet } from '../../assets/logoPet.svg';
import { ReactComponent as Paw } from '../../assets/animalPaw.svg';
import { useResponce } from "../hooks/response/response";

import Modal from "../Modal/Modal";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectedIsLoadingUser, selectedUser } from "../../redux/auth/selectorsAuth";
import Box from "../Box/Box";




const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {isDesktop, isTablet, isMobile} = useResponce()
    console.log(isDesktop) 
    const isAuth = useSelector(selectedIsLoadingUser)
    const {user} = useSelector(selectedUser)
    console.log(user, 'isAuth')
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
            {!isAuth ? <ListButton>
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
            </ListButton> : 
            <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto'}}>
                <div style={{width: '16px', height: '16px', backgroundColor: 'green'}}>
                    <img src="" alt="" />
                </div>
                <div>
                    <p>{user.email}</p>
                </div>
            </Box>
            }
        </HeaderCont>
        
        </>
    )
}

export default Navigation