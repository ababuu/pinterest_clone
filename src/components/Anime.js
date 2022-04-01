import React from "react";
import './Anime.css';
import ImageFetch from './ImageFetch';

const colors = ["green thumb idea", "weeknight dinner idea", "home décor idea","new outfit"];
const colors2 = ["green thumb", "weeknight dinner", "home décor","new outfit"];
const delay = 4000;

export default function Slideshow() {
const [index, setIndex] = React.useState(0);
const timeoutRef = React.useRef(null);

function resetTimeout() {
    if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
    }
}

React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
    () =>
        setIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
    delay
    );

    return () => {
    resetTimeout();
    };
}, [index]);

return (
    <div className="slideshow">
        <h1 className="title">Get Your Next</h1>
    <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
        
        {colors.map((text, index) => (
        <div
            className="slide"
            key={index}
        >
            <h1 className="title-detail">{text}</h1>
        </div>
        ))}
    </div>

    <div className="slideshowDots">
        {colors.map((_, idx) => (
        <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
            setIndex(idx);
            }}
        ></div>
        ))}
        <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
        
        {colors2.map((text, index) => (
        <div
            className="slide"
            key={index}
        >
            <ImageFetch query={text}/>
        </div>
        ))}
    </div>
    </div>
    </div>
);
}
