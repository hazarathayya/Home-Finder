import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Signin from './pages/SignIn'

export default function App() {
  return <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sign-in" element={<Signin />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
  
}
