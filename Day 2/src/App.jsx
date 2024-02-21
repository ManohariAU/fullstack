import {Navigate,Route,Routes} from "react-router-dom"
import Login from "./components/pages/auth/Login"
import Signup from "./components/pages/auth/signup"
import Navbar from "./components/services/Navbar"
function App() {

  return (
    <Routes><Route exact path="/" element={<Navigate to="/login"/>}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/navbar" element={<Navbar/>}/>

    </Routes>
  )
}

export default App
