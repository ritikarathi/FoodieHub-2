import { Route, Routes } from "react-router-dom";
import AddFood from "./Pages/AddFood/AddFood"
import ListFoods from "./Pages/ListFoods/ListFoods"
import Orders from "./Orders/Orders";
import SideBar from "./Components/SideBar/SideBar"
import MenuBar from "./Components/MenuBar/MenuBar"


const App = () => {
  return (
    <div>
       <div className="d-flex" id="wrapper">
            <SideBar/>
            <div id="page-content-wrapper">
                <MenuBar/>
                <div className="container-fluid">
                    <Routes>
                      <Route path="/add" element={<AddFood />} />
                      <Route path="/list" element={<ListFoods />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/" element={<ListFoods />} />
                    </Routes>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
