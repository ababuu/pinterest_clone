    import * as React from 'react';
import './Card.css'

    export default function ImageMasonry(props) {

    return (
        <div>
            {props.margin.map(mt=>(
                <main style={{marginTop:mt}}>
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

