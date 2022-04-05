import * as React from 'react';
import '../styles/Card.css'

    export default function ImageMasonry(props) {

    return (
        <body>
            {/* {props.fromAnime && props.margin.map(mt=>(
                <main style={{marginTop:mt}}>
                {props.photos.map(photo=>(
                    <article key={photo}>
                        <img className='card-images' src={photo} alt={photo.alt}/>
                    </article>
                ))}
            </main>
            ))}
            {props.fromHome &&  */}
                
                {props.photos.map(photo=>(
                    <article key={photo.id}>
                        <img className='card-images' src={photo.urls.regular} alt={photo.alt}/>
                    </article>
                ))}
            {/* } */}
        </body>
    );
    }

