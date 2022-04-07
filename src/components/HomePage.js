import * as React from 'react';
import AppBar from './AppBar';
import ImageFetch from './ImageFetch';
export default function HomePage() {
    return(
        <body>
            <AppBar unauth={false}/>
            <ImageFetch/>
        </body>
    )
}