import {Routes, Route} from "react-router-dom";
import './App.css';
import HomePageComponent from "./components/Home/HomePage";



function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<HomePageComponent />}></Route>
      </Routes>
    </div>
  );

 
}

export default App;
