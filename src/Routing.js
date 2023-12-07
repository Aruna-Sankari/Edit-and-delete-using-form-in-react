import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Form1 from './Routing/Form1.js'
import Home1 from './Routing/Home1.js'


const Routing=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form1/>}></Route>
                <Route path="/Home1" element={<Home1/>}></Route>
                <Route path="/Form1/:id" element={<Form1/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}
export default Routing