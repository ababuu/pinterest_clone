
import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import BasicCard from './Card';

const api = createApi({
// Don't forget to set your access token here!
// See https://unsplash.com/developers
accessKey: "q7m0afK2EKltLfZOpy70IDIetxIOd81hVwGOQ47L7_I"
});

export default function Body(props) {
const [data, setPhotosResponse] = useState(null);

useEffect(() => {
    api.search
    .getPhotos({ query: 'cars'})
    .then(result => {
        setPhotosResponse(result);
    })
    .catch(() => {
        console.log("something went wrong!");
    });
    
}, []);
console.log(data)
if (data === null) {
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
            <BasicCard fromHome={true} photos={data.response.results} />
    </div>
    );
}
};

