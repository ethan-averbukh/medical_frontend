import { useNavigate } from "react-router";
import strings from './../../strings.json';
const GoToJournals = () => {
  const navigate = useNavigate();
  const handleReDirect = () => {
    navigate("/home");
  };
  return (
    <div className="intro-nav-journals">
      <div className="intro-goto-descript">{strings.goToDescript}</div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleReDirect}
      >
        {strings.goToJournals}
      </button>
    </div>
  );
};

export default GoToJournals;
