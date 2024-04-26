import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"

import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from "./pages/Signup"
import ResetPassord from "./pages/ResetPassord"



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/resetpassword" element={<ResetPassord/>}/>
      </Routes>
    </Router>

      
      
    </>
  )
}
export default App
