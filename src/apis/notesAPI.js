import axios from 'axios';

//Notes API Calls

const putNotesAPICall = async (note) => {
    const note = await axios.put(`http://localhost:3000/Notes/${note._id}`)
}

const patchNotesAPICall = async(note) => {
    const note = await axios.put(`http://localhost:3000/Notes/${note._id}`)
}