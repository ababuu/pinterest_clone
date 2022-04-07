import * as React from 'react';
import '../styles/MainCards.css'


export default function MainCard(props) {
    let arr=[];
    props.photos1.map(photo=>{
        let colHeight=0;
        photo.response.results.map(pic=>{
            colHeight+=pic.height;
        })
        arr.push(colHeight);
    })
    console.log(arr);
    return (
        <body>
        <div class="container">
                {
                    props.photos1.map(photo=>(
                                <div className="column">
                            {photo.response.results.map(pic=>(
                                <div className="content-wrapper">
                                <div className="image-wrapper">
                                    <div class="overlay">
                                    <div>
                                        <p><a href={pic.user.links.html}>Creator</a></p>
                                        <button class="save">Save</button>
                                    </div>
                                    <div>
                                        {/* <button class="spheric-button">
                                            twitter.com
                                        </button> */}
                                    </div>
                                </div>
                                    <img src={pic.urls.regular} alt=""/>
                                </div>
                                {/* <p>{pic.alt_description}</p> */}
                            </div>
                            ))}
                        </div>
                        ))
                }
        </div>
        </body>
    );
}