import {Routes, Route} from 'react-router-dom';
import "./App.css";
import HomePageComponent from "./components/Home/HomePage";
import IntroComponent from './components/Home/IntroductionPage';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IntroComponent />}/>
        <Route path="/intro" element={<IntroComponent />} />
        <Route path="/home" element={<HomePageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
