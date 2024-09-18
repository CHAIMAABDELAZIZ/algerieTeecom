import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chome from "./Pages/Chome/Chome";
import CList from './Pages/Clist/Clist';
import Cnew from './Pages/Cnew/Cnew'
import Cmodifier from './Pages/Cmodifier/Cmodifier';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Chome />} />
            <Route path="adposts">
              <Route index element={<CList />} />
              <Route
                path="Cnew"
                element={<Cnew />}
              />
              <Route
                path="Cmodifier"
                element={< Cmodifier />}
              />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}
export default App;

