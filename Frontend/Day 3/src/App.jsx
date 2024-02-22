import {Navigate,Route,Routes} from "react-router-dom"
import { lazy } from "react"
import LazyLayout from "./components/pages/auth/LazyLayout"
import Navbar from "./components/services/Navbar"
import SideNav from "./components/services/Sidebar"

const LazyLogin =lazy(()=>import("./components/pages/auth/Login"))
const LazySignup =lazy(()=>import("./components/pages/auth/signup"))
function App() {

  return (
    <Routes><Route exact path="/" element={<Navigate to="/login"/>}/>
    <Route path="/login" element={<LazyLayout component={LazyLogin} />}/>
    <Route path="/signup" element={<LazyLayout component={LazySignup} />}/>
    <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/sidebar" element={<SideNav/>}/>

    </Routes>
  )
}

export default App
