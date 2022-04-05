import {Routes, Route} from 'react-router-dom';
import "./App.css";
import HomePageComponent from "./components/Home/HomePage";
import IntroComponent from './components/Home/IntroductionPage';


function App() {
  let journalEntry='';
  const journalNumbersUpdate = (journalTitle) => {
    journalEntry = journalTitle;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroComponent handleJournalUpdate={journalNumbersUpdate}/>}/>
        <Route path="/home" element={<HomePageComponent journals={journalEntry}/>} />
      </Routes>
    </div>
  );
}

export default App;
