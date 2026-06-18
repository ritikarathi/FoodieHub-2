import { Route, Routes } from "react-router-dom";
import AddFood from "./Pages/AddFood/AddFood"
import ListFoods from "./Pages/ListFoods/ListFoods"
import Orders from "./Orders/Orders";
import SideBar from "./Components/SideBar/SideBar"
import MenuBar from "./Components/MenuBar/MenuBar"
import { useState } from "react";


const App = () => {
  const [sideBarVisible, setSideBarVisible] = useState(true);

  const toggleBar =()=> {
    setSideBarVisible(!sideBarVisible);
  }

  return (
    <div>
       <div className="d-flex" id="wrapper">

            <SideBar sideBarVisible ={sideBarVisible}/>
            <div id="page-content-wrapper">

                <MenuBar toggleBar = {toggleBar} />
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
