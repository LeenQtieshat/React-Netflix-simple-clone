
import './App.css';
import tmdb from "./tmdb";
import requests from './requests';
import {useState,useEffect} from 'react'
import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/NavBar'

function App() {
  const [movie , setMovie] = useState(null)
 
  useEffect(()=>{
    
    tmdb.get(requests.fetchNetflixOriginals).then(res => {const arr = (res.data.results)
     setMovie (arr[
        Math.floor(
               (Math.random()*arr.length -1)
               )])
    } )
    },[])
  return (
    <div className="App">
  <Nav/>
  <Banner movie ={ movie} />
   <Row title="NETFLIX ORIGINALS"  fetchURL={requests.fetchNetflixOriginals} isNetflixOriginal/>
   <Row title="TRENDING NOW" fetchURL={requests.fetchTrending}/>
   <Row title="TOP RATED" fetchURL={requests.fetchTopRated}/>
   <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies}/>
   <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;

