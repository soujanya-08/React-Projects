import { useState } from "react";
import { WatchListContext } from "../Context/WatchListContext";
import { useContext } from "react";
function WatchList({  }) {
    const {watchList, setWatchList,handleRemovefromWatchList} = useContext(WatchListContext);
    const [search, setSearch] = useState('');

    let handleSearch = (e) => {
        setSearch(e.target.value);
    }
    let sortAscending = () => {
        let sortedIncreasing = watchList.sort((movieA, movieB) => {
            return movieA.rank.toString()[0] - movieB.rank.toString()[0];
        })
        setWatchList([...sortedIncreasing])
    }
    let sortDescending = () => {
        let sortedDecreasing = watchList.sort((movieA, movieB) => {
            return movieB.rank.toString()[0] - movieA.rank.toString()[0];
        })
        setWatchList([...sortedDecreasing])
    }
    return (
        <>
            <div className="flex justify-center my-4">
                <input type="text" onChange={handleSearch} value={search} className="h-[2rem] w-[18rem] bg-gray-200 outline-none p-4" placeholder="Search for movies" />
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
                <table className="w-full text-gray-500 text-center">
                    <thead className="border-b-2">
                        <tr>
                            <th>Name</th>
                            <th className="flex justify-center">
                                <div onClick={sortAscending} className="p-2">^</div>
                                <div className="p-2">Ratings</div>
                                <div onClick={sortDescending} className="p-2">v</div>
                            </th>

                            <th>Popularity</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchList.filter((movieObj) => {
                            return (movieObj.l.toLowerCase().includes(search.toLowerCase()))
                        }).map((movieObj) => {
                            return (<tr className="border-b-2" key={movieObj.id}>
                                <td className="flex items-center px-6 py-4">
                                    <img className='h-[6rem] w-[10rem]' src={`${movieObj.i.imageUrl}`} />
                                    <div className="mx-10">{movieObj.l}</div>
                                </td>
                                <td>{movieObj.rank.toString()[0]}</td>
                                <td>{movieObj.rank}</td>
                                <td>Action</td>
                                <td className="text-red-800 cursor-pointer" onClick={() => handleRemovefromWatchList(movieObj)}>Delete</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default WatchList 