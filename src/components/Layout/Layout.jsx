
import { Suspense } from "react"
import Navigation from "../Navigation/Navigation"
import { useResponce } from "../hooks/response/response"
import { Wrapper, Section, Header } from "./Layout.styled"
import { Outlet } from "react-router-dom"





const Layout = ({children}) => {
    const {isDesktop, isTablet, isMobile} = useResponce()
    return (
        <>
        <Wrapper>
            
            <Header>
            <Navigation />
            </Header>
            
            <main>
                <Section isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile}>
                <Suspense>
                <Outlet fallback={null}></Outlet>
            </Suspense>
                </Section>
            </main>
        </Wrapper>
        </>
    )
}

export default Layout