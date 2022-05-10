import * as React from 'react';
import '../styles/MainCards.css'


export default function MainCard(props) {
    const ref=React.useRef('');
    const handleSave=(arg)=>{
        console.log(arg)
    }
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
                                        <button label={pic.urls.regular} className="save" onClick={handleSave(ref.current.src)}>Save</button>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                    <img  src={pic.urls.regular} alt=""/>
                                </div>
                                {/* <p>{pic.alt_description}</p> */}
                            </div>
                            ))}
                        </div>
                        ))
                }
        </div>
        </div>
    );
}