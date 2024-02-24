import {Navigate,Route,Routes} from "react-router-dom"
import { lazy } from "react"
import LazyLayout from "./components/pages/auth/LazyLayout"


const LazyLogin =lazy(()=>import("./components/pages/auth/Login"))
const LazySignup =lazy(()=>import("./components/pages/auth/signup"))
function App() {

  return (
    <Routes><Route exact path="/" element={<Navigate to="/login"/>}/>
    <Route path="/login" element={<LazyLayout component={LazyLogin} />}/>
    <Route path="/signup" element={<LazyLayout component={LazySignup} />}/>
    

    </Routes>
  )
}

export default App
