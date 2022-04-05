import axios from 'axios';

//Notes API Calls
const getNotesAPICall = async() => {
    const notes = await axios.get("http://localhost:3000/Notes")
    return notes;
};
const getNotesByPropertyAPICall = async (property) => {
    const notes = await axios.get(`http://localhost:3000/Notes/${property}`);
    return notes;
}
const postNotesAPICall = async(note) => {
    const newNote = await axios.post("http://localhost:3000/Notes", note)
};

const putNotesAPICall = async (note) => {
    const editNote = await axios.put(`http://localhost:3000/Notes/${note._id}`, note)
}

const patchNotesAPICall = async(note) => {
    const editNote = await axios.put(`http://localhost:3000/Notes/${note._id}`, note)
}



export {
    getNotesAPICall,
    getNotesByPropertyAPICall,
    patchNotesAPICall,
    postNotesAPICall,
    putNotesAPICall
}