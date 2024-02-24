import {Navigate,Route,Routes} from "react-router-dom"
import { lazy } from "react"
import LazyLayout from "./components/pages/auth/LazyLayout"
import Navbar from "./components/services/Navbar"
import SideNav from "./components/services/Sidebar"
import Footer from "./components/services/Footer"
import UserProfile from "./components/pages/user/UserProfile"
import LoanPolicies from "./components/pages/user/LoanPolicies"
import UserHome from "./components/pages/user/UHome"
import ApplyLoan_page1 from "./components/pages/user/ApplyLoan_page1"
import ApplyLoan_page2 from "./components/pages/user/ApplyLoan_page2"
import TrackLoan from "./components/pages/user/TrackLoan"
import DashBoard from "./components/pages/user/Dashboard"
import AdminHome from "./components/pages/admin/AHome"
import AppliedLoans from "./components/pages/admin/AppliedLoans"
import AboutPage from "./components/services/About"
import ContactUs from "./components/services/Contact"



const LazyLogin =lazy(()=>import("./components/pages/auth/Login"))
const LazySignup =lazy(()=>import("./components/pages/auth/signup"))
function App() {

  return (
    <Routes><Route exact path="/" element={<Navigate to="/login"/>}/>
    <Route path="/login" element={<LazyLayout component={LazyLogin} />}/>
    <Route path="/signup" element={<LazyLayout component={LazySignup} />}/>
    <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/sidebar" element={<SideNav/>}/>
    <Route path="/footer" element={<Footer/>}/>
    <Route path="/profile" element={<UserProfile/>}/>
    <Route path="/loanpolicies" element={<LoanPolicies/>}/>
    <Route path="/uhome" element={<UserHome/>}/>
    <Route path="/applyloan1" element={<ApplyLoan_page1/>}/>
    <Route path="/applyloan2" element={<ApplyLoan_page2/>}/>
    <Route path="/trackloan" element={<TrackLoan/>}/>
    <Route path="/dashboard" element={<DashBoard/>}/>
    <Route path="/ahome" element={<AdminHome/>}/>
    <Route path="/appliedloans" element={<AppliedLoans/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/contact" element={<ContactUs/>}/>

    </Routes>
  )
}

export default App
