import "./Banner.css"

const imgsBaseURL = "https://image.tmdb.org/t/p/original/"
export default ({movie}) =>{
    const textController =(str,n) => str.split("").slice(0,n).join("") + "..."
    if (movie){ return <header className="banner"  style = {{backgroundImage: `url(${imgsBaseURL}${movie.backdrop_path||movie.poster_path})` ,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"conver"}}>
        <div className="banner__content">
            <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
            <div className="banner__buttons"> 
                <button className="btn1">Play </button>
                <button className="btn2">My List</button>
            </div>
            <p className="banner__description">{movie.overview.length >=150 ?textController(movie.overview,150):movie.overview}</p>
        
        </div>
        <div className="banner__bottomFadeEffect">
              
              </div>
    </header>}
    return 
}