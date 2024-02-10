import React, {useState, useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch';

// const API_KEY = 'ZYQ4347siwhOC4jiMUIJbFhMhrnidmp5'
function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch("https://api.giphy.com/v1/gifs/search?q=dogs&api_key=ZYQ4347siwhOC4jiMUIJbFhMhrnidmp5&rating=g")
        .then(response => response.json())
        .then(data => {
            setGifs(data.data)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false)
        });
        
    }, []);

    const handleSearchSubmit = (searchTerm) => {
        setLoading(true)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=ZYQ4347siwhOC4jiMUIJbFhMhrnidmp5&rating=g`)
        .then(response => response.json())
        .then(data => {
            setGifs(data.data)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false)
        });
    };

    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
  return (
    <div>
        GifListContainer
        <GifSearch onSearchSubmit={handleSearchSubmit} />
        <GifList gifs={gifs}/>
    </div>
  )
}

export default GifListContainer