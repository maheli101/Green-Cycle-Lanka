import React from 'react';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import './App.css'

import Yardenterence from "./pages/Yardenterence";
import Pick from "./pages/Pick";
import Order from "./pages/Order";
import Update from "./pages/Update";



export default function App() {
  return (
    <>

    <BrowserRouter>
    
      <Routes>
        
        <Route path="/yardentrance" element={<Yardenterence />}> </Route>
        <Route path="/Pick" element={<Pick />} >  </Route>
        <Route path="/Order" element={<Order />}> </Route>
        <Route path="/Update" element={<Update />} >  </Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}







 

