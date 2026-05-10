import {
  FaEye,
  FaShareAlt,
  FaRegSave,
  FaArrowLeft
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (

    <div className="top-navbar">

      <div className="nav-left">

        <FaArrowLeft 
          className="nav-back-icon"
          onClick={() => navigate("/")}
        />

        <span className="form-title-text">Form title</span>

      </div>

      <div className="nav-right">

        <FaShareAlt className="nav-icon" title="Share" />

        <FaEye className="nav-icon" title="Preview" />

        <button className="save-btn">

          <FaRegSave />

          Save

        </button>

      </div>

    </div>

  );
}

export default Header;