import  NewJournal  from "./../Journal/NewJournal";
import GoToJournals from "./../Journal/GoToJournals";
import strings from './../../strings.json';

const IntroComponent = ({handleJournalUpdate}) => {
    return (
        <div className='intro'>
            
            <h1 className= 'intro-title'>{strings.introTitle}</h1> 
            <div className= 'intro-description'>
                <p>{strings.introStatement}</p>
            </div> 
            <div className="intro-new-journal">
                <NewJournal updateJournalNumbers={handleJournalUpdate}/>
            </div>
            <div className="intro-goto-journals">
                <GoToJournals />
            </div>
        </div>
    )
}

export default IntroComponent;