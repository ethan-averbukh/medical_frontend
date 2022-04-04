import { useState } from "react";
import { useNavigate } from "react-router";
import strings from './../../strings.json';

const NotesComponent = ({noteValues}) => {
  
  const [value, setValue] = useState(0);
  const [newNote, setNewNote] = useState({
    date: new Date().toLocaleString(),
    symptom: "",
    severity: 0,
    medications: "",
    activities: "",
    foods: "",
  });
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    
  };
  const handleNewSubmit = (event) => {
      event.preventDefault();
  }
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
            <form className="notes-form" onSubmit={noteValues ? handleSubmit : handleNewSubmit}>
              <label htmlFor="symptom">{strings.symptom}</label>
              <input
                type="text"
                id="symptom"
                name="symptom"
                defaultValue={noteValues.symptom ? noteValues.symptom : ""}
                onChange={()=>handleChange}
              />
              <label htmlFor="severity">{strings.severity}</label>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue={noteValues.severity ? noteValues.severity : 1}
                name="severity"
                id="Severity"
                onChange={handleChange}
              />
              <label htmlFor="severity">{strings.value}:{value}</label>
              <label htmlFor="activities">{strings.dailyActivities}</label>
              <textarea
                name="activities"
                id="activities"
                cols={30}
                rows={10}
                defaultValue = {noteValues.activities ? noteValues.activities : ""}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="foods">{strings.dailyFood}</label>
              <textarea
                name="foods"
                id="foods"
                cols={30}
                rows={10}
                defaultValue={noteValues.foods ? noteValues.foods : ""}
                onChange={handleChange}
              />
               <label htmlFor="medications">{strings.medications}</label>
              <textarea
                name="medications"
                id="medications"
                cols={30}
                rows={10}
                defaultValue={noteValues.medications ? noteValues.medications : ""}
                onChange={handleChange}
              />
              <input type="submit" value="Submit Note" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesComponent;
