import { Route, Routes } from "react-router-dom"
import MenuBar from "./components/MenuBar/MenuBar"
import Home from "./pages/Home/Home"
import ContactUs from "./pages/Contact Us/ContactUs"
import Explore from "./pages/Explore/Explore"

const App = () => {
  return (
    <div>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
    </div>
  )
}

export default App
