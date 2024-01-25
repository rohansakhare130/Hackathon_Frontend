import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //install for react-router-dom
import './App.css';
import Login from "./container/LoginPage"
import Forgetpage from "./container/Forgetpage"
import Home from "./container/Home";
import Category from "./container/Category";
import Addcategory from "./include/AddCategorypage";
import Addproduct  from "./include/AddProduct";
import Product from "./container/Products";
import Logout from "./include/Logout";
import Deleted from "./include/Deletepage";
import Screen from "./screen/Screen";
export const Context = createContext();
function App() {
  const [editMode , setEditMode] = useState(false)
  
  const contextValue = {
    editMode,
    setEditMode
  }
  return (
    <Context.Provider value={contextValue}>
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forgetpage/>} />
         
          <Route path="/home" element={<Screen><Home /></Screen>} />
          <Route path="/category" element={<Screen><Category /></Screen>} />
          <Route path="/addcategory" element={<Screen><Addcategory /></Screen>} />
          <Route path="/product" element={<Screen><Product /></Screen>} />
          <Route path="/addproduct" element={<Screen><Addproduct /></Screen>} />
          <Route path="/logout" element={<Screen><Logout/></Screen>} />
          <Route path="/deleted" element={<Screen><Deleted/></Screen>} />
        
        </Routes>
    
    </BrowserRouter>
  </Context.Provider>
  );
}

export default App;
