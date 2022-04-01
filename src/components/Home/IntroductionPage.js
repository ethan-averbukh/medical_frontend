import { useState } from "react";
import { useNavigate } from "react-router";
import { postJournalAPICall } from "../../apis/journalsAPI";

const IntroComponent = () => {
    const navigate = useNavigate();
    const [newJournal, setNewJournal] = useState({
        "title": "",
        "date": new Date().toLocaleString(),
        "notes": []
    })
    const [journalEntryExists, setJournalEntryExists] = useState(true)
    const handleSubmit = (event) => {
        event.preventDefault();
        postJournalAPICall(newJournal);
        setJournalEntryExists(false);
        navigate('/Journals')
    }
    const handleChange = (event) => {
        setNewJournal((prevState)=>{
            const newEntry = {
                ...prevState,
                [event.target.name]: event.target.value
            };
            return newEntry;
        })
       
    }
    console.log(newJournal);
    const createJournal = () => {
        
    }
    return (
        <div className='intro'>
            <h1 className= 'intro-title'>Welcome to the Symptom Tracker.</h1> 
            <p className= 'intro-description'>
                A journal app built to alleviate the wasted time a doctor spends 
                typing into his computer. 
            </p> 
            {journalEntryExists && <p> You currently have no journal entries, click the button to create one.</p>}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#journalModal">New Journal</button> 
            <div className="modal fade" id="journalModal" tabIndex={-1} aria-labelledby="journalModalLabel" aria-hidden={true}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="journalModalLabel">New Journal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" area-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="journal-title" className="col-form-label">Journal Title:</label>
                                    <input type="text" className="form-control" id="journal-title" name="title" onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="journal-date">Date:</label>
                                    <input type="text" className="form-control" id="journal-date" name="date" onChange={handleChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleSubmit}>Create Journal</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IntroComponent;