import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./../Navigation/Navbar";
import JournalComponent from "./../Journal/Journal";
import NotesComponent from "./../Notes/Notes";
import data from "./../../data.json";

const HomePageComponent = () => {
  const sumbitANote = (noteSubmission) => {};
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route
          path="/Notes"
          element={<NotesComponent handleNotesSubmission={sumbitANote} />}
        ></Route>
        <Route
          path="/Journal"
          element={<JournalComponent journalEntries={data} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default HomePageComponent;
