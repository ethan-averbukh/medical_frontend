import axios from 'axios';


//Journal API Calls
const getJournalAPICall = async () => {
    let journals;
    try {
        journals = await axios.get("http://localhost:3000/Journals");
    } catch (error) {
        console.log(error)
    }
   
    return journals;
}

const deleteJournalAPICall = async (journalID) => {
    try {
        await axios.delete(`http://localhost:3000/Journals/${journalID}`)
    } catch (error) {
        
    }
}
const postJournalAPICall = async (journal) => {
    const journalPost = await axios.post("http://localhost:3000/Journals", {
        "title": journal.title,
        "Date": journal.Date,
        "Notes": journal.Notes
    })
}

const putJournalAPICall = async (journal, note) => {
    const journalPost = await axios.put(`http://localhost:3000/Journals/${journal._id}`,
    {
        title: journal.title,
        date: journal.date,
        notes: note._id
    }
    )
}


export {
    deleteJournalAPICall,
    getJournalAPICall,
    postJournalAPICall,
    putJournalAPICall
}