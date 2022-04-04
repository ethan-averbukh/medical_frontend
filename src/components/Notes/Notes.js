import { useState } from "react";
import { useNavigate } from "react-router";

const NotesComponent = ({ handleNotesSubmission }) => {
  const [value, setValue] = useState(0);
  const [newNote, setNewNote] = useState({
    Date: new Date().toLocaleString(),
    symptom: "",
    severity: 0,
    medications: "",
    activities: "",
    foods: "",
  });
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNotesSubmission(newNote);
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
              Note
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="notes-form" onSubmit={handleSubmit}>
              <label htmlFor="symptom">Symptom</label>
              <input
                type="text"
                id="symptom"
                name="symptom"
                onChange={handleChange}
              />
              <label htmlFor="severity">Severity</label>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue="1"
                name="severity"
                id="Severity"
                onChange={handleChange}
              />
              <label htmlFor="severity">Value:{value}</label>
              <label htmlFor="activities">Daily Activities</label>
              <textarea
                name="activities"
                id="activities"
                cols={30}
                rows={10}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="foods">Daily Food Tracker</label>
              <textarea
                name="foods"
                id="foods"
                cols={30}
                rows={10}
                defaultValue={""}
                onChange={handleChange}
              />
              <input type="submit" value="New Entry" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesComponent;
