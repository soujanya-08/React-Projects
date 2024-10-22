import { useEffect, useState } from "react"
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList"
import Search from "./components/Search";
import Header from "./components/Header";

const App = ()=>{
  const[notes,setNotes]=useState(
    [{
      id:nanoid(),
      text:"This is my first note",
      date:"9/22/2024"
    },
    {
      id:nanoid(),
      text:"This is my second note",
      date:"9/19/2024"
    },
    {
      id:nanoid(),
      text:"This is my third note",
      date:"9/20/2024"
    },
  ]
  );
  //Retrieve notes that are saved in localStorage
  useEffect(()=>{
    const savedNotes=JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    console.log(savedNotes);
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);
  //useEffect will store Notes to localStorage anytime Notes change
  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes]);

  const[searchText, setSearchText] = useState('');
  const[darkMode, setDarkMode] = useState(false);

  const AddNote=(text)=>{
    const date = new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote]
    setNotes(newNotes);
  }
  const deleteNotes=(id)=>{
    const newNotes= notes.filter((note)=>note.id != id )
    setNotes(newNotes);
  }
  return(
    <div className={`${darkMode && "dark-mode"}`}>
      <div className = "container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList Notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={AddNote} handleDeleteNote={deleteNotes} />
      
    </div>
  </div>  
  )
}
export default App