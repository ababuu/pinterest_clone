import * as React from 'react';
import '../styles/MainCards.css'


export default function MainCard(props) {
    const ref=React.useRef('');
    const saved = [];
    
    const handleSave=(arg)=>{
        if(JSON.parse(localStorage.getItem('saved'))!=null){
            JSON.parse(localStorage.getItem('saved')).map(s=>saved.push(s))
        }
        saved.push(arg)
        localStorage.setItem('saved',JSON.stringify(saved));

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
                                        <button label={pic.urls.regular} className="save" onClick={()=>handleSave(pic.urls.regular)}>Save</button>
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