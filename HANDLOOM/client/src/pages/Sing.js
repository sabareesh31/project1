
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Blogs from "./blogs";

export default function Sing(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route index element={<Home/>}/>
            <Route path="blogs" element={<Blogs/>}/>
            </Routes>
            </BrowserRouter>
    );
}

const root=ReactDom.createRoot(document.getElementById('root'));l
root.render(<Sing/>);