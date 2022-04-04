import { useState, useEffect } from "react";
import { convertDate } from "../../TimeConverter";
import { getJournalAPICall } from "../../apis/journalsAPI";
import NotesList from "../Notes/createNotes";
const JournalComponent = () => {
  const [manyJournalEntries, setManyJournalEntries] = useState([]);
  const [lengthOfJournalEntries, setLengthOfJournalEntries] = useState(0);
  useEffect(async () => {
    //Retrieve all of the journal entries and set them to the state
    // const response = getJournalAPICall();

    // {
    //   response && setManyJournalEntries(response.data);
    // }
  }, [lengthOfJournalEntries]);

  return (
    <div className="accordion" id="Accordion">
      {manyJournalEntries &&
        manyJournalEntries.map((item, index) => {

          return (
            <div className="accordion-item" key={item._id}>
              <h2 className="accordion-header" id={`Journal${index}`}>
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {item.title}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse"
                aria-labelledby={`Journal${index}`}
                data-bs-parent="#Accordion"
              >
                <div className="accordion-body">
                   { item.notes ? <NotesList notes={item.notes} /> : <NotesList notes={undefined}/>}
                </div>
              </div>
              <p>{convertDate(item.Date).year}</p>
              <p>{convertDate(item.Date).time}</p>
            </div>
          );
        })}
    </div>
  );
};

export default JournalComponent;
