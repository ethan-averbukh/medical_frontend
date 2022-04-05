import axios from 'axios';

//Notes API Calls
const getNotesAPICall = async() => {
    const notes = await axios.get("https://protected-brook-20008.herokuapp.com/Notes")
};

const postNotesAPICall = async(note) => {
    const newNote = await axios.post("https://protected-brook-20008.herokuapp.com/Notes", note)
};

const putNotesAPICall = async (note) => {
    const editNote = await axios.put(`https://protected-brook-20008.herokuapp.com/Notes/${note._id}`, note)
}

const patchNotesAPICall = async(note) => {
    const editNote = await axios.put(`https://protected-brook-20008.herokuapp.com/Notes/${note._id}`, note)
}



export {
    getNotesAPICall,
    patchNotesAPICall,
    postNotesAPICall,
    putNotesAPICall
}