import { Route, Routes } from "react-router-dom"
import MenuBar from "./components/MenuBar/MenuBar"
import Home from "./pages/Home/Home"
import ContactUs from "./pages/Contact Us/ContactUs"
import Explore from "./pages/Explore/ExploreFood"
import FoodDetails from "./pages/FoodDetails/FoodDetails"

const App = () => {
  return (
    <div>
      <MenuBar/>
      
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/food/:id" element={<FoodDetails/>} />
      </Routes>
    </div>
  )
}

export default App
