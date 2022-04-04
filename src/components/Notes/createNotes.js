
export const NotesList = (notes) => {
    let notesList = notes.map((item,index)=>{
        return (
            <button key={index} data-bs-toggle="modal" data-bs-target="#noteModal">
                <h4>{item.Symptom}</h4>
                <h5>{item.Date}</h5>
            </button>
        )
    })
    return (
        {notesList}
    )
}

export default NotesList;