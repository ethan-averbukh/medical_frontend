import NotesComponent from "./Notes";

export const NotesList = (notes) => {

  let notesList = [];
  if (notes != undefined) {
    notesList = notes.notes.map((item, index) => {
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
          </button>
          <NotesComponent noteValues={item} />
        </div>
      );
    });
  } else {
    return (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target="#noteModal"
        ></button>
        <NotesComponent noteValues={undefined} />
      </div>
    );
  }
  return  notesList ;
};

export default NotesList;
