import {BrowerRouter, BrowserRouter, Route,Routes} from 'react-router-dom';
import * as React from 'react';
import App from './App';
import HomePage from './components/HomePage';
import HomePageIntro from './components/HomePageIntro';
import Profile from './components/Profile';

function RouteSwitch(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/selection' element={<HomePageIntro/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;