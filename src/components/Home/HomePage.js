import { Routes, Route } from "react-router-dom";
import NavBarComponent from "../Navigation/Navbar";
import JournalComponent from "../Journal/Journal";
import NotesComponent from "../Notes/Notes";
import { useEffect, useState } from "react";
import { getNotesAPICall } from "../../apis/notesAPI";

const HomePageComponent = () => {
  const [journalEntry, setJournalEntry] = useState({});
  const [notesEntries, setNotesEntries] = useState([]);

  // useEffect(async () => {
  //   const notesResponse = getNotesAPICall();
  //   setNotesEntries(notesResponse.data);
  // }, [journalEntry]);

  // const sumbitANote = (noteSubmission) => {
  //   setJournalEntry(noteSubmission);
  //   console.log(noteSubmission);
  // };
  return (
    <div>
      <NavBarComponent />
      {/* <NotesComponent handleNotesSubmission={sumbitANote} /> */}
      <JournalComponent />
    </div>
  );
};

export default HomePageComponent;
