import React, {useEffect, useState} from 'react';
import Movie from './Movie';

 

const App = ()  => {
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState("");
  const SEARCHAPI ='https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';
  const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const getMovies = async (API) => {
    const response = await fetch(API);
    const movies = await response.json();
    setMovies(movies.results)
  }

  useEffect(() => {
    getMovies(APIURL)
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(SEARCHAPI+inputText)
    setInputText("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>MOVIE <span>-</span><span> APP</span></h2>
        <input 
          type="text" 
          placeholder="Enter a movie" 
          onChange={(e) => setInputText(e.target.value)}/>
      </form>
      <div className="movies">
            <>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </>
      </div>
    </>
  );
};

export default App;
