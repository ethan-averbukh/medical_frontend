import NotesComponent from "./Notes";

export const NotesList = (notes) => {
  if (notes != undefined) {
    let notesList = notes.map((item, index) => {
      return (
        <div>
          <button
            key={index}
            data-bs-toggle="modal"
            data-bs-target="#noteModal"
          >
            <h4>{item.Symptom}</h4>
            <h5>{item.Date}</h5>
          </button>
          <NotesComponent noteValues={item}/>
        </div>
      );
    });
  } else {

  }
  return { notesList };
};

export default NotesList;
