import * as React from 'react';
import '../styles/MainCards.css'


export default function MainCard(props) {
    return (
        <div className='body'>
        <div className="container">
                {
                    props.photos1.map((photo,id)=>(
                                <div className="column" key={id}>
                            {photo.response.results.map(pic=>(
                                <div key={pic.id} className="content-wrapper">
                                <div className="image-wrapper">
                                    <div className="overlay">
                                    <div>
                                        <p><a href={pic.user.links.html}>Creator</a></p>
                                        <button className="save">Save</button>
                                    </div>
                                    <div>
                                        {/* <button class="spheric-button">
                                            twitter.com
                                        </button> */}
                                    </div>
                                </div>
                                    <img src={pic.urls.regular} alt=""/>
                                </div>
                                <p>{pic.alt_description}</p>
                            </div>
                            ))}
                        </div>
                        ))
                }
        </div>
        </div>
    );
}