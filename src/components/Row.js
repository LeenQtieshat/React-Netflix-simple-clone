import React, {useState , useEffect} from 'react'
import movieTrailer from 'movie-trailer';
import tmdb from "../tmdb";
import "./Row.css"
import YouTube from 'react-youtube';
import youtubeReq from '../youtube';
import { isCompositeComponent } from 'react-dom/test-utils';
const imgsBaseURL = "https://image.tmdb.org/t/p/original/"
export default React.memo (({title,fetchURL,isNetflixOriginal }) =>{
      const opts = {
            height: '390',
            width: '640',
            
          };
const [movies , setMovies] = useState([])
const [trailerURL,settrailerURL] = useState(null)
useEffect(()=>{
tmdb.get(fetchURL).then(res => {setMovies(res.data.results)} )
},[fetchURL])

const onPosterClick = (m) =>{
     
      if(trailerURL) settrailerURL("")
      else movieTrailer(m?.name || "").then(url =>{
            if(url){
                  settrailerURL(url.substr(url.indexOf("=")+1)) 
                             
            } else{
                  youtubeReq.get("search",{
                   params:{     q:m?.name || m?.title}
                  }).then(res =>
                        {
                              settrailerURL(res.data.items[0].id.videoId)})
            }
      }) 
}
const displayMovies = (movies) =>movies.map(movie => <img onClick={()=>onPosterClick(movie)} key={movie.id} className={`row__poster ${isNetflixOriginal && "row__backdrop"}`} src={`${imgsBaseURL}${isNetflixOriginal? movie.poster_path : movie.backdrop_path}`}/>) 


 return   <div className="row">
                  <h2 style={{color:"#fff", textAlign:"left", marginLeft:"10px"}}>{title}</h2>
        <div className='row__posters'>
         
              {movies.length && displayMovies(movies)}
</div>
{trailerURL && <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${trailerURL}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}

               </div> 

}

)