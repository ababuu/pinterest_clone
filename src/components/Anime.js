import React from "react";
import '../styles/Anime.css';
import BasicCard from './Card';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const textDetails = [{
                    text:"green thumb idea",
                    color: "rgb(64, 122, 87)"},
                    {
                    text:"weeknight dinner idea",
                    color: "rgb(194, 139, 0)"},
                    {
                    text:"home décor idea",
                    color: "rgb(0, 118, 211)"},
                    {
                    text:"new outfit",
                    color: "rgb(97, 140, 123)"}];
const photos = [{
    url:['https://i.pinimg.com/236x/3b/34/33/3b3433ce9b772f4c5a1467ef05d79adc.jpg','https://i.pinimg.com/236x/ab/dd/a8/abdda8768e6732bd3dd57e7f8b36186c.jpg','https://i.pinimg.com/236x/87/91/6a/87916a587c7d62d9f99723b34d6de8d9.jpg','https://i.pinimg.com/236x/82/ad/0e/82ad0eb82f48b7bc48ce66e35e1fba5e.jpg','https://i.pinimg.com/236x/cf/2d/87/cf2d87610d7bbd8d857db1e5d39100fe.jpg','https://i.pinimg.com/236x/f9/28/eb/f928eb3b8b990fd8b2384f08a862a688.jpg','https://i.pinimg.com/236x/0f/41/30/0f4130b19afc9ee45d0a081259ce2682.jpg','https://i.pinimg.com/236x/76/3c/59/763c59ae0ef778e195eb1e096575670a.jpg','https://i.pinimg.com/236x/ab/18/41/ab18412335c892a7d85cd0f0270ad2ec.jpg','https://i.pinimg.com/236x/76/51/c3/7651c32bbe81cd3c9d3b29e4248fdca2.jpg',],margin: ['-70000000px']
},{url:['https://i.pinimg.com/236x/cc/e3/b5/cce3b5b6de8da59fa543b29220d2eb29.jpg','https://i.pinimg.com/236x/e8/8b/12/e88b123fd4a3f0555d7e70045ac14f9c.jpg','https://i.pinimg.com/236x/1b/b2/12/1bb2124eb3cadba8a4512d4b28d9c40e.jpg','https://i.pinimg.com/236x/26/4d/12/264d1231e0b487696ed70e5aa1fcab07.jpg','https://i.pinimg.com/236x/f6/00/94/f600942e62c76e2574e889071aac4832.jpg','https://i.pinimg.com/236x/15/db/d6/15dbd6d0caf791fedb810ea10c83f413.jpg','https://i.pinimg.com/236x/eb/63/4a/eb634ac8dff5892b237ab712d3417c7f.jpg','https://i.pinimg.com/236x/7e/90/37/7e90376f60ef5f789f9d47d59aafeb4a.jpg','https://i.pinimg.com/236x/71/9f/d6/719fd6d10ffe890097af4e83e151988c.jpg','https://i.pinimg.com/236x/be/bc/6b/bebc6ba1a878a5f1ae26820252829519.jpg'],margin: ['-90000000px']},
{url:['https://i.pinimg.com/236x/33/4c/cb/334ccb9843315453d9919991ba895b55.jpg','https://i.pinimg.com/236x/5d/a0/8a/5da08a63be34adbd3f9353e8786c3400.jpg','https://i.pinimg.com/236x/6e/df/c5/6edfc52021c2778af85960aea0229251.jpg','https://i.pinimg.com/236x/86/e2/9c/86e29ce0587a4532feceb0d316ff0ae7.jpg','https://i.pinimg.com/236x/11/58/0a/11580a14106087a3399c47179200a379.jpg','https://i.pinimg.com/236x/39/e3/fe/39e3fe0a1c77a49892a73b7dce95e54b.jpg','https://i.pinimg.com/236x/03/44/78/0344780716e2cab621fb97fe1672d1e2.jpg','https://i.pinimg.com/236x/80/a4/68/80a468b214494a0c0c046277470da3ca.jpg','https://i.pinimg.com/236x/d9/3e/4c/d93e4c16db14a2738c8e0bb86099e5d5.jpg','https://i.pinimg.com/236x/c8/21/51/c821512fe80e7c610683e9fedd33d190.jpg'],margin:['-40000000px']},
{url:['https://i.pinimg.com/236x/03/d4/3b/03d43b90d6ec1252eae6235e509dcc05.jpg','https://i.pinimg.com/236x/ba/10/14/ba101489866d0e2a9286a5f932f56bd8.jpg','https://i.pinimg.com/236x/ae/81/3e/ae813e01223509082b1499929d0c24c6.jpg','https://i.pinimg.com/236x/d4/3b/7e/d43b7e412d81dedbf779013946346825.jpg','https://i.pinimg.com/236x/19/60/a2/1960a2668cc4c2015e5bc54a22dff3f2.jpg','https://i.pinimg.com/236x/e0/78/9f/e0789f3638450feb268cc83c416bbb7e.jpg','https://i.pinimg.com/236x/26/e8/60/26e860be059972219ec65d3b41436261.jpg','https://i.pinimg.com/236x/5b/d5/bf/5bd5bff188ff4cd93b0f413d6bc686c1.jpg','https://i.pinimg.com/236x/b7/dc/ae/b7dcae6f0f465fae7cb9f5b7e3f65b3b.jpg'],margin:['10px']}];
const delay = 4000;


export default function Slideshow() {
const [index, setIndex] = React.useState(0);
const timeoutRef = React.useRef(null);
const ref = React.useRef();
        const handleScroll = React.useCallback(() => {
            alert("scrolling")
        }, [])
        React.useEffect(() => {
            const div = ref.current
            div.addEventListener("scroll", handleScroll)
        }, [handleScroll]);
        
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
        prevIndex === textDetails.length - 1 ? 0 : prevIndex + 1
        ),
    delay
    );

    return () => {
    resetTimeout();
    };
}, [index]);

return (
    <div className="slideshow"  ref={ref}>
            <h1 className="title">Get Your Next</h1>
        <div
            className="slideshowSlider" 
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
            
            {textDetails.map((detail, index) => (
            <div
                className="slide"
                key={index}
            >
                <h1 className="title-detail" style={{color:detail.color}}>{detail.text}</h1>
            </div>
            ))}
        </div>

        <div className="slideshowDots">
            {textDetails.map((_, idx) => (
            <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                setIndex(idx);
                }}
            ></div>
            ))}
            
        </div>
        <div
            className="slideshowSlider card-container"
            style={{ transform: `translate3d(${-index * 100}%,0, 0)` }}
        >
            
            {photos.map((text, index) => (
            <div
                className="slide"
                key={index}
            >
                <BasicCard fromAnime={true} photos={text.url} margin={text.margin}/>
            </div>
            ))}
            
        </div>
        <div className="buttonContainer">
                <ArrowDropDownCircleIcon className="floatingButton"/>
            </div>
    </div>
);
}
