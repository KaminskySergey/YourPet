
import Navigation from "../Navigation/Navigation"
import { useResponce } from "../hooks/response/response"
import { Wrapper, Section, Header } from "./Layout.styled"





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
                    {children}
                </Section>
            </main>
        </Wrapper>
        </>
    )
}

export default Layout