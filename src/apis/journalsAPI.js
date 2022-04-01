import axios from 'axios';


//Journal API Calls

const postJournalAPICall = async (journal) => {
    const journal = await axios.post("http://localhost:3000/Journal", {
        "title": journal.title,
        "Date": journal.Date,
        "Notes": journal.Notes
    })
}

const putJournalAPICall = async (journal) => {
    const journal = await axios.put(`http://localhost:3000/Journal/${journal._id}`)
}


export {
    postJournalAPICall,
    putJournalAPICall
}