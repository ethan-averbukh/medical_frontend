import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router";
import { postJournalAPICall } from "./../../apis/journalsAPI";
import strings from './../../strings.json';

const NewJournal = ({updateJournalNumbers}) => {
    const navigate = useNavigate();
    const [newJournal, setNewJournal] = useState({
        "title": "",
        "date": new Date().toDateString(),
        "notes": []
    })
    const [noJournalEntryExists, setNoJournalEntryExists] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newJournal);
        postJournalAPICall(newJournal);
        setNoJournalEntryExists(false);
        updateJournalNumbers(newJournal.title);
        navigate('/home')
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

  return (
    <div>
        <div className='intro-no-jrnls'>{strings.createJournal}</div>
        <button type="button" className="btn btn-primary new-journal" data-bs-toggle="modal" data-bs-target="#journalModal">{strings.newJournal}</button> 
        <div className="modal fade" id="journalModal" tabIndex={-1} aria-labelledby="journalModalLabel" aria-hidden={true}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="journalModalLabel">{strings.newJournal}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" area-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="journal-title" className="col-form-label">{strings.journalTitle}</label>
                                <input type="text" className="form-control" id="journal-title" name="title" onChange={handleChange}/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >{strings.close}</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleSubmit}>{strings.createJournal}</button>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    
  )
};

export default NewJournal;




