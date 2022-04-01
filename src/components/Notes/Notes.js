import { useState } from "react";
import { useNavigate } from "react-router";



const NotesComponent = ({handleNotesSubmission}) => {
    const [value, setValue] = useState(0);
    const [newNote, setNewNote] = useState({
        'Date': new Date().toLocaleString(),
        'symptom': '',
        'severity': 0,
        'medications': '',
        'activities': '',
        'foods': ''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        handleNotesSubmission(newNote);
        navigate('/')
    }
    const handleChange = (event) => {
        if(event.target.name === 'severity'){
            setValue(event.target.value);
        }
        setNewNote((prevState) => {
            const newEntry = {
                ...prevState,
                [event.target.name]: event.target.value
            };
            return newEntry
        })
        
    }
    return (
        <div className="notes">
            <form className="notes-form" onSubmit={handleSubmit}>
                <label htmlFor='symptom'>Symptom</label>
                <input type="text" id='symptom' name='symptom' onChange={handleChange}/>
                <label htmlFor="severity">Severity</label>
                <input type="range" min='1' max='10' defaultValue='1' name='severity' id='Severity' onChange={handleChange}/>
                <label htmlFor="severity">Value:{value}</label>
                <label htmlFor="activities">Daily Activities</label>
                <textarea name="activities" id="activities" cols={30} rows={10} onChange={handleChange}></textarea>
                <label htmlFor="foods">Daily Food Tracker</label>
                <textarea name="foods" id="foods" cols={30} rows={10} defaultValue={""} onChange={handleChange}/>
                <input type="submit" value="New Entry" />
            </form>
        </div>
    )
}

export default NotesComponent;