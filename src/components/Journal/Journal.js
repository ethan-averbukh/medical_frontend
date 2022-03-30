import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';

const JournalComponent = ({journalEntries}) => {
    const navigate = useNavigate();
    let listofEntries;
    const [newEntries, setNewEntry] = useState([]);
    const [newEntryCount, setNewEntryCount] = useState(0);

    useEffect(()=>{
        if(journalEntries){
            setNewEntry(journalEntries);
        }
        console.log(newEntries)
      
    }, [newEntryCount])
    const handleClick = () => {
        navigate('/')
    }
    listofEntries = newEntries.map((item,index)=>{
        return (
            <div key={index}>
                {item.Symptom}
            </div>
        )
    })
    return (
        <div>
            {listofEntries}
            <input type="submit" onClick={handleClick}/>
        </div>
    )
}

export default JournalComponent;