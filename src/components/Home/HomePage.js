import NavBarComponent from "./../Navigation/Navbar";
import JournalComponent from "./../Journal/Journal";
import data from './../../journalData.json';
import strings from './../../strings.json';
const HomePageComponent = () => {


  return (
    <div>
      <NavBarComponent />
      <h3 className="home-journal-header">{strings.journalsHeader}</h3>
      <JournalComponent journalEntry={data.journal}/>
    </div>
  );
};

export default HomePageComponent;
