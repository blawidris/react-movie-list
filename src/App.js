import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

import "./App.css";
import searchIcon from "./search.svg";

// apiKey: d793e1ca

const apiKey = "d793e1ca";
const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}`;

// const movie1 = {
//   Title: "The Avengers",
//   Year: "2012",
//   imdbID: "tt0848228",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${apiURL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const loadMovies = async () => {
    const response = fetch(`${apiURL}&`);
    const data = response;

    // setMovies(data.Search);
    console.log(data)
  };

  //   console.log(movies.Search);

  useEffect(() => {
    //  loadMovies();

    searchMovies("Avengers");
  }, []);
  //   const movieList = movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => searchMovies(searchTerm)}
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>

      {/* {movies} */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No movie found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
