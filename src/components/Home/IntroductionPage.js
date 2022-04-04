import  NewJournal  from "../Journal/NewJournal";
import strings from './../../strings.json';

const IntroComponent = () => {
    return (
        <div className='intro'>
            
            <h1 className= 'intro-title'>{strings.introTitle}</h1> 
            <p className= 'intro-description'>
                {strings.introStatement}
            </p> 
            <NewJournal />
        </div>
    )
}

export default IntroComponent;