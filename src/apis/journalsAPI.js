import axios from 'axios';


//Journal API Calls
const getJournalAPICall = async () => {
    const journals = await axios.get("https://protected-brook-20008.herokuapp.com/Journals");
    return journals;
}

const postJournalAPICall = async (journal) => {
    const journalPost = await axios.post("https://protected-brook-20008.herokuapp.com/Journals", {
        "title": journal.title,
        "Date": journal.Date,
        "Notes": journal.Notes
    })
}

const putJournalAPICall = async (journal) => {
    const journalPost = await axios.put(`https://protected-brook-20008.herokuapp.com/Journals/${journal._id}`, journal)
}


export {
    getJournalAPICall,
    postJournalAPICall,
    putJournalAPICall
}