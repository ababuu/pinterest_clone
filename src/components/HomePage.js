import React from 'react';
import ImageFetch from './ImageFetch';
import AppBar from './AppBar';

export default function HomePage({queries}){
    return(
        <div>
            <AppBar unauth={false}/>
            <ImageFetch queries={queries}/>
        </div>
    )
}