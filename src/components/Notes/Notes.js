import { useState } from "react";
import { useNavigate } from "react-router";


const NotesComponent = ({handleNotesSubmission}) => {
    const [newNote, setNewNote] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/')
    }
    const handleChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='symptom'>Symptom</label>
                <input type="text" id='symptom' name='symptom' onChange={handleChange}/>
                <label htmlFor="severity">Severity</label>
                <input type="range" min='1' max='10' defaultValue='5' name='severity' id='Severity' onChange={handleChange}/>
                <label htmlFor="activities">Daily Activities</label>
                <textarea name="activities" id="activities" cols="30" rows="10" onChange={handleChange}></textarea>
                <label htmlFor="foods">Consumables</label>
                <textarea name="foods" id="foods" cols="30" rows="10" defaultValue={"What have you eaten and/or drank today?"} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NotesComponent;