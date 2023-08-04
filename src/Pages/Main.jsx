import { useEffect, useState } from "react";
/*const requestURL = "http://www.omdbapi.com/?s=star&apikey=14628068";*/

function Main(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${props.searchTerm}&apikey=14628068`
      );
      const responseData = await response.json();
      setMovies(responseData.Search);
    };
    fetchMovies();
  }, [props.searchTerm]);

  return (
    <div>
      <h1 className="Hero">Movies Home</h1>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div className="Cards">
              <h2>{movie.Title}</h2>
              <img src={movie.Poster} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default Main;
