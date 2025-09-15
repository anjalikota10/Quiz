import { BrowserRouter, Route, Routes } from "react-router-dom"
import Viewhome from "./Pages/Viewhome"
import ViewAbout from "./Pages/ViewAbout"
import Viewcontactus from "./Pages/Viewcontactus"
import RegistrationForm from "./components/RegistrationForm"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login"
import ViewResultcard from "./Pages/ViewResultcard"
import Viewprofile from "./Pages/Viewprofile"
import Viewtest from "./Pages/Viewtest"
import Viewdetails from "./Pages/Viewdetails"
import Viewquiz from "./Pages/Viewquiz"


function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Viewhome/>} />
          <Route path="/about" element={<ViewAbout/>}/>
          <Route path="/contactus" element={<Viewcontactus/>}/>
          <Route path="/registration" element={<RegistrationForm/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/quiz/:id" element={<Viewquiz/>}/>
          <Route path="/resultcard/:id" element={<ViewResultcard/>}/>
          <Route path="/vprofile" element={<Viewprofile/>}/>
          <Route path="/test-list" element={<Viewtest/>}/>
            <Route path="/test-details/:user_id/:course_id" element={<Viewdetails/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
