import React from "react";
import "../styles/App.scss"
import Header from "./Header";
import Main from "./Main/Main";
import Footer from "./Footer";
import {Routes, Route} from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Registration from "./Registration/Registration";


function App () {
return <React.Fragment>
    <Header />
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/aboutus' element={<AboutUs/>} />
            <Route path='/registration' element={<Registration/>} />
        </Routes>
    {/*<Footer />*/}

</React.Fragment>
    }




export default App;