import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();
  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestOptions = {
      method: "GET",
      headers: headers,
    }

    fetch(`http://localhost:8080/movies/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  }, [])

  return(
    <div>
      <h2>Movie: {movie.title}</h2>
      <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mapp_rating}</em></small>
      <hr />
      <p>{movie.description}</p>
    </div>
  )
}

export default Movie;
