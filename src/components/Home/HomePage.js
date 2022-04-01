import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import NavBarComponent from "../Navigation/Navbar";
import JournalComponent from "../Journal/Journal";
import NotesComponent from "../Notes/Notes";

import { useEffect, useState } from "react";
import IntroComponent from "./IntroductionPage";

const HomePageComponent = () => {
  const [journalEntry, setJournalEntry] = useState({})
  const [notesEntries, setNotesEntries] = useState([]);
  const [manyJournalEntries, setManyJournalEntries] = useState([]);
  useEffect(async ()=>{
    //Post new journal entry to specific journal
    // if(journalEntry)
    //   await axios.post("http://localhost:3000/Notes", 
    //   journalEntry
    // )
    const notesResponse = await axios.get("http://localhost:3000/Notes")
    setNotesEntries(notesResponse.data)
    //Retrieve all of the journal entries and set them to the state
    const response = await axios.get("http://localhost:3000/Journal")
    setManyJournalEntries(response.data)
  },[journalEntry]);

  const sumbitANote = (noteSubmission) => {
    setJournalEntry(noteSubmission)
    console.log(noteSubmission)
  };
  console.log(notesEntries);
  return (
    <div>
      <NavBarComponent />
      <IntroComponent />
      <Routes>
        <Route
          path="/Notes"
          element={<NotesComponent handleNotesSubmission={sumbitANote} />}
        ></Route>
        <Route
          path="/Journal"
          element={<JournalComponent journalEntries={manyJournalEntries} />} // takes in All of the Journal Entries
        ></Route>
      </Routes>
    </div>
  );
};

export default HomePageComponent;
