import {BrowerRouter, BrowserRouter, Route,Routes} from 'react-router-dom';
import * as React from 'react';
import App from './App';
import Login from './components/Login';


function RouteSwitch(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;