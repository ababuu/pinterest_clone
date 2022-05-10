import React from 'react';
import ImageFetch from './ImageFetch';
import AppBar from './AppBar';
let queries=JSON.parse(localStorage.getItem('queries'));
export default function HomePage(){
    
    console.log(queries);
    return(
        <div>
            <AppBar unauth={false}/>
            <ImageFetch queries={queries}/>
        </div>
    )
}