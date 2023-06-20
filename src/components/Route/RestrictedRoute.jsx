import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectedIsLoadingUser } from "../../redux/auth/selectorsAuth"


export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
    const isLoggeIn = useSelector(selectedIsLoadingUser)
    console.log(isLoggeIn)
    return isLoggeIn ? <Navigate to={redirectTo} /> : <Component/>
}