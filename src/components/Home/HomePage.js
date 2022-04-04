import NavBarComponent from "../Navigation/Navbar";
import JournalComponent from "../Journal/Journal";
import data from './../../journalData.json';

const HomePageComponent = () => {


  return (
    <div>
      <NavBarComponent />
      <JournalComponent journalEntry={data.journal}/>
    </div>
  );
};

export default HomePageComponent;
