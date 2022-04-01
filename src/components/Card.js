    import * as React from 'react';
import './Card.css'

    export default function ImageMasonry(props) {
        
    return (
        <main>
            {props.photos.map(photo=>(
                <article key={photo.id}>
                    <img src={photo.urls.regular} alt={photo.alt}/>
                </article>
            ))}
        </main>
    );
    }

