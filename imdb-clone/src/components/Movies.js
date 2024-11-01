import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"
import axios from 'axios';

function Movies() {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',//API Call to get the Json data
        //url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: { q: 'deep' },
        headers: {
          'x-rapidapi-key': 'e07d330a08msh444dcfa28af31f9p156d71jsnbc56ebbf4d1', // f Replace with your actual API key
          'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options); // Await the axios request
        console.log(response.data);
        setmovies(response.data.d)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures the effect runs only once on mount


  return (
    <div className="p-3 m-2">
      <div className="text-2xl font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-3 ">
        {movies.map(movieObj => {
          return <MovieCard key={movieObj.id} movieObj={movieObj} posterPath={movieObj.i.imageUrl} name={movieObj.l} />
        })}
      </div>
    </div>
  )
}
export default Movies 