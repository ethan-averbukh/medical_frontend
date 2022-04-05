import {useState,useEffect} from 'react';
import NavBarComponent from "./../Navigation/Navbar";
import JournalComponent from "./../Journal/Journal";

import strings from './../../strings.json';
const HomePageComponent = ({journals}) => {

  return (
    <div>
      <NavBarComponent />
      <h3 className="home-journal-header">{strings.journalsHeader}</h3>
      <JournalComponent totalJournals={journals}/>
    </div>
  );
};

export default HomePageComponent;
