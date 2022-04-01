import { useState } from "react";
import { postJournalAPICall } from "../../apis/journalsAPI";

const IntroComponent = () => {
    const [newJournal, setNewJournal] = useState({})
    const [journalEntryExists, setJournalEntryExists] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleModalOpen = (event) => {
        
    }
    const createJournal = () => {
        postJournalAPICall(newJournal);
    }
    return (
        <div className='intro'>
            <h1 className= 'intro-title'>Welcome to the Symptom Tracker.</h1> 
            <p className= 'intro-description'>
                A journal app built to alleviate the wasted time a doctor spends 
                typing into his computer. 
            </p> 
            {journalEntryExists && <p> You currently have no journal entries, click the button to create one.</p>}
            <button className='intro-new-journal btn' onClick={handleModalOpen}>New Journal</button>
            {isModalOpen && 
                <div className="modal fade" id="journalModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden={true}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Journal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" area-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="journal-title" className="col-form-label">Journal Title:</label>
                                        <input type="text" className="form-control" id="journal-title" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="journal-date">Date:</label>
                                        <input type="text" className="form-control" id="journal-date" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalOpen}>Close</button>
                                <button type="button" className="btn btn-secondary" onClick={handleModalOpen}>Create Journal</button>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}