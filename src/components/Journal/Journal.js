import { useState, useEffect } from "react";
import {
  deleteJournalAPICall,
  getJournalAPICall,
  putJournalAPICall,
} from "./../../apis/journalsAPI";
import NotesList from "../Notes/createNotes";
const JournalComponent = ({ totalJournals }) => {
  const [manyJournalEntries, setManyJournalEntries] = useState([]);
  const [deletedItems, setDeletedItems] = useState(0);

  useEffect(async () => {
    // Retrieve all of the journal entries and set them to the state
    const response = await getJournalAPICall();
    setManyJournalEntries(response.data);
  }, [deletedItems, totalJournals]);

  const handleDelete = (itemID) => {
    deleteJournalAPICall(itemID);
  };
  const handleTitleEdit = (itemID) => {
    putJournalAPICall(itemID)
  }
  return (
    <div className="accordion" id="Accordion">
      {manyJournalEntries.data &&
        manyJournalEntries.data.map((item, index) => {
          return (
            <div className="accordion-item " key={item._id}>
              <h2 className="accordion-header" id={`Journal${index}`}>
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {item.title}
                  <div
                    id="Delete"
                    className="btn btn-danger "
                    onClick={() => {
                      handleDelete(item._id);
                      setDeletedItems(deletedItems + 1);
                    }}
                  >
                    Delete
                  </div>
                  <div
                  id="Edit"
                  className="btn btn-warning"
                  onClick={()=>{
                    handleTitleEdit(item._id)
                  }}>
                    Edit Title
                  </div>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`Journal${index}`}
                data-bs-parent="#Accordion"
              >
                <div className="accordion-body">
                  {item.notes.length ? (
                    <NotesList journal={item}/>
                  ) : (
                    <NotesList notes={[]} journal={item}/>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default JournalComponent;
