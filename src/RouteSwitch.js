import {BrowerRouter, BrowserRouter, Route,Routes} from 'react-router-dom';
import * as React from 'react';
import App from './App';
import Login from './components/Login';
import HomePage from './components/HomePage';


function RouteSwitch(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/home' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;