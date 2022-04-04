import axios from 'axios';


//Journal API Calls
const getJournalAPICall = async () => {
    const journals = await axios.get("http://localhost:3000/Journals");
    return journals;
}

const postJournalAPICall = async (journal) => {
    const journalPost = await axios.post("http://localhost:3000/Journals", {
        "title": journal.title,
        "Date": journal.Date,
        "Notes": journal.Notes
    })
}

const putJournalAPICall = async (journal) => {
    const journalPost = await axios.put(`http://localhost:3000/Journals/${journal._id}`, journal)
}


export {
    getJournalAPICall,
    postJournalAPICall,
    putJournalAPICall
}