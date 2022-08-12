import React, {useEffect, useState} from "react";
import axios from "axios"

function Box(){

    const [photos, setPhotos] = useState([]);
    let url = 'https://jsonplaceholder.typicode.com/photos'
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/photos')
    //         .then(response => setPhotos(response.data))
    // },[])

function fetchAPI(url){
    axios.get(url)
        .then(response => setPhotos(response.data))
        .catch(error => console.log('에러발생'))
}
if(photos.length > 0) {
    return (
            photos.map((photo) => (
                <div>
                    <img src={photo.thumbnailUrl}/>
                </div>
            ))
    );
}else{
    return (<button onClick={fetchAPI(url)}>CLick</button>);
}
}

export default Box
