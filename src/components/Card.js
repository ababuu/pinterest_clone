import * as React from 'react';
import '../styles/Card.css'

    export default function ImageMasonry(props) {

    return (
        <body>
            {props.fromAnime && props.margin.map(mt=>(
                <main>
                {props.photos.map(photo=>(
                    <article key={photo}>
                        <img className='card-images' src={photo} alt={photo.alt}/>
                    </article>
                ))}
            </main>
            ))}
        </body>
    );
    }

