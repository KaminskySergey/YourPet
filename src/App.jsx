import Layout from "./components/Layout/Layout"
import FindPet from "./pages/FindPet/FindPet";
import Gallery from "./pages/FindPet/FindPet"
import { Route, Routes } from 'react-router-dom';
import MyAccount from "./pages/MyAccount/MyAccount";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const App = () => {

    return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route path="/yourPet" element={<FindPet />}/>
        <Route path="/myAccount" element={<MyAccount />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Route>
    </Routes>
      {/* <Layout>
        <Gallery />
      </Layout> */}
    </>
  )
}

export default App
