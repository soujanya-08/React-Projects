import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import WatchList from './components/WatchList';
//Routing to view other page seamlessly
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import {WatchListContext} from './Context/WatchListContext';//Provide COntext
import { useEffect, useState } from 'react';
function App() {
  let[watchList, setWatchList] = useState([])

  let handleAddtoWatchList=(movieObj)=>{
    let newWatchList =[...watchList , movieObj];
    localStorage.setItem("movies",JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log(newWatchList)
  }
  let handleRemovefromWatchList=(movieObj)=>{
    let filteredWatchlist = watchList.filter((movie)=>{
    return movie.id != movieObj.id
  })
  setWatchList(filteredWatchlist);
  localStorage.setItem("movies",JSON.stringify(filteredWatchlist))
  }
  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('movies')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Banner/>
          <WatchListContext.Provider value={{handleAddtoWatchList, handleRemovefromWatchList, watchList}}> <Movies />
          </WatchListContext.Provider> 
          </>}/>
          <Route path='/watchlist' element={<WatchListContext.Provider value={{watchList,setWatchList,handleRemovefromWatchList}}><WatchList/></WatchListContext.Provider>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
