import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom"
import {ForgetPassword,Hero,Login,Register} from "./pages"

function App() {
    return(
       
        <BrowserRouter>
        <Routes>
            <Route element={<Hero/>} path="/"/>
            <Route element={<Register/>} path="/signup"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<ForgetPassword/>} path="/forget-password"/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;