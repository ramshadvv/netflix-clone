import {useEffect,useState } from 'react';
import './Banner.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';

function Banner() {
  const [movie, setMovie] = useState();
  let x = Math.floor((Math.random() * 20) + 1);
  console.log(x)
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[x])
    })
  }, [x]);
  return (
    <div className='banner'
     style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className="title">{movie ? movie.title : ""}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ''}</h1>

        </div>
        <div className="fade"></div>
      
    </div>
  );
}

export default Banner;
