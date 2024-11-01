import { Link } from "react-router-dom"

const Navbar = ()=>{

    return (
        <div className="flex border space-x-8 items-center pl-3 py-1">
            <img src="movie-logo.jpeg" className="w-[40px]" alt="movie logo"/>

            <Link to="/" className="text-blue-500 text-m font-bold">Movies</Link>
            <Link to="/watchlist" className="text-blue-500 text-m font-bold">WatchList</Link>
        </div>
    )
}
export default Navbar