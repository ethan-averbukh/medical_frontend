import NotesComponent from "./Notes";
import {useEffect, useState} from 'react';
import strings from './../../strings.json';

export const NotesList = ({notes, journal}) => {
  const [newNotes,setNewNotes] = useState([]);

  useEffect(async ()=>{
    setNewNotes(notes);
  },[])

  const handleClick = () => {}
  let notesList = [];
  if (newNotes.length > 0) {
    notesList = newNotes.map((item, index) => {
      return (
        <div className='d-grid gap-2'>
          <button
            key={index}
            className='btn btn-outline-secondary'
            data-bs-toggle="modal"
            data-bs-target="#noteModal"
          >
            <h4>{item.symptom}</h4>
            <h5>{item.date}</h5>
            <button className="btn btn-danger" onClick={handleClick}>Delete</button>
          </button>
          <NotesComponent noteValues={item} journal={journal}/>
        </div>
      );
    });
  } else {
    return (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target="#noteModal"
          className="btn btn-light"
        >
          {strings.createNewNote}
        </button>
        <NotesComponent noteValues={undefined} journal={journal}/>
      </div>
    );
  }
  return  notesList ;
};

export default NotesList;
