import React, {
  useEffect,
  useState
} from "react";
import './App.css';
import Movie from "./components/Movie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=18bbc44d1e9834345fa7cd8f22c77cee&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=18bbc44d1e9834345fa7cd8f22c77cee&language=en-US&page=1&include_adult=false&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) =>{
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }
  const handleOnSubmit =(e)=>{
     e.preventDefault();
     if(searchTerm)
     {
       getMovies(SEARCH_API+searchTerm);
       setSearchTerm('');
     }
};

  const handleOnChange =(e)=>{
    setSearchTerm(e.target.value);
  }
  return( 
  <div>  
      <header>
        <nav>
        <h2>The Movies Space</h2>
        </nav>
        <form onSubmit={handleOnSubmit}>
          <input 
          className="search" type="search" placeholder="Search"
          value={searchTerm} 
          onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container"> 
        {
        movies.length>0 && movies.map((movie) => 
        <Movie key={movie.id}
         {...movie}
        />)
        } 
      </div> 
  </div>
  );
}
export default App;