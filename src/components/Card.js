import * as React from 'react';
import '../styles/Card.css'

    export default function ImageMasonry(props) {

    return (
        <div className='body'>
            {props.fromAnime && props.margin.map(mt=>(
                <main key={mt}>
                {props.photos.map(photo=>(
                    <article key={photo}>
                        <img className='card-images' src={photo} alt={photo.alt}/>
                    </article>
                ))}
            </main>
            ))}
        </div>
    );
    }

