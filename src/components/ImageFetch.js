
import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import MainCard from './MainCards';

const api = createApi({
// Don't forget to set your access token here!
// See https://unsplash.com/developers
accessKey: "q7m0afK2EKltLfZOpy70IDIetxIOd81hVwGOQ47L7_I"
});

export default function Body(props) {
const [data, setPhotosResponse] = useState([]);
const [data2, setData2]=useState(null);
const queries=['landscape','dogs', 'cats','flower','car','trees','bike'];

useEffect(() => {
    queries.map(query=>{
        api.search
        .getPhotos({ query: query})
        .then(result => {
            setPhotosResponse(prev=>[...prev,result]);
        })
        .catch(() => {
            console.log("something went wrong!");
        });
    })
    
}, []);
console.log(data)
if (data === null || data.length<queries.length) {
    return <div>Loading...</div>;
} else if (data.errors) {
    return (
    <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
    </div>
    );
} else {
    return (
    <div className="feed">
            <MainCard photos1={data}/>
    </div>
    );
}
};

