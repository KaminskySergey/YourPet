import Layout from "./components/Layout/Layout"
import FindPet from "./pages/FindPet/FindPet";
// import Gallery from "./pages/FindPet/FindPet"
import { Route, Routes } from 'react-router-dom';
import MyAccount from "./pages/MyAccount/MyAccount";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refresh } from "./redux/auth/thunkAuth";
import { RestrictedRoute } from "./components/Route/RestrictedRoute";
import { PrivateRoute } from "./components/Route/PrivateRoute";


const App = () => {
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(refresh())
    
  }, [dispatch])
  

    return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route path="/yourPet" element={<FindPet />}/>
        <Route path="/myAccount" element={<PrivateRoute component={MyAccount} redirectTo="/yourPet"/>}/>
        <Route path="/register" element={<RestrictedRoute component={Register} redirectTo="/yourPet"/>}/>
        <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/yourPet"/>}/>
      </Route>
    </Routes>
      {/* <Layout>
        <Gallery />
      </Layout> */}
    </>
  )
}

export default App
