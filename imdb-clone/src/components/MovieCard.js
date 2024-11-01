import { WatchListContext } from "../Context/WatchListContext";
import { useContext } from "react";
function MovieCard({ movieObj, posterPath, name }) {
    const { handleAddtoWatchList, handleRemovefromWatchList, watchList } = useContext(WatchListContext)

    function doesContain(movieObj) {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id === movieObj.id)
                return true;
        }
        return false;
    }
    return (
        <div className="h-[60vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor flex flex-col justify-between items-end" style={{ backgroundImage: `url(${posterPath})` }}>
            {doesContain(movieObj) ?
                <div onClick={() => handleRemovefromWatchList(movieObj)} className="flex m-4 justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
                    &#10060;
                    </div> :
                <div onClick={() => handleAddtoWatchList(movieObj)} className="flex m-4 justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
                    &#128525;
                </div>}

            <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
                {name}
            </div>
        </div>

    )
}
export default MovieCard