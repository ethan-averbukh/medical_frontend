import { useState,useEffect } from "react";
import { putJournalAPICall } from "../../apis/journalsAPI";

import {getNotesByPropertyAPICall, postNotesAPICall} from './../../apis/notesAPI';
import strings from "./../../strings.json";

const NotesComponent = ({ noteValues, journal }) => {
  const [value, setValue] = useState(0);
  const [notes, setNotes] = useState([]);
  const [addedNotes,setAddedNotes] = useState(0);
  const [newNote, setNewNote] = useState({
    date: new Date().toLocaleString(),
    symptom: "",
    severity: 0,
    medications: "",
    activities: "",
    foods: "",
  });

  useEffect(async ()=>{
    const retrievedNotes = await getNotesByPropertyAPICall(newNote.symptom);
    setNotes(retrievedNotes.data)
    
    console.log(notes)
  }, [addedNotes])

  const handleSubmit = (event) => {
    event.preventDefault();
    postNotesAPICall(newNote);
  };
 
  const handleChange = (event) => {
    if (event.target.name === "severity") {
      setValue(event.target.value);
    }
    setNewNote((prevState) => {
      const newEntry = {
        ...prevState,
        [event.target.name]: event.target.value,
      };
      return newEntry;
    });
  };

 
    return (
      <div
        className="modal fade"
        id="noteModal"
        tabIndex={"-1"}
        aria-labelledby="noteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="noteModalLabel">
                {strings.note}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="notes-form"
                onSubmit={handleSubmit}
              >
                <label htmlFor="symptom">{strings.symptom}</label>
                <input
                  type="text"
                  id="symptom"
                  name="symptom"
                  onChange={handleChange}
                />
                <label htmlFor="severity">{strings.severity}</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue={1}
                  name="severity"
                  id="Severity"
                  onChange={handleChange}
                />
                <label htmlFor="severity">
                  {strings.value}:{value}
                </label>
                <label htmlFor="activities">{strings.dailyActivities}</label>
                <textarea
                  name="activities"
                  id="activities"
                  cols={20}
                  rows={5}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="foods">{strings.dailyFood}</label>
                <textarea
                  name="foods"
                  id="foods"
                  cols={20}
                  rows={5}
                  onChange={handleChange}
                />
                <label htmlFor="medications">{strings.medications}</label>
                <textarea
                  name="medications"
                  id="medications"
                  cols={20}
                  rows={5}
                  onChange={handleChange}
                />
                <input type="submit" data-bs-dismiss="modal" value="Submit Note" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NotesComponent;
