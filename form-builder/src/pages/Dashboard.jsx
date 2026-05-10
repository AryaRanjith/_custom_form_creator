import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="container">

      <div className="top-bar">

        <h1>Forms</h1>

        <button
          onClick={() => navigate("/builder")}
        >
          + Blank Form
        </button>

      </div>

      <div className="empty-card">

        <h2>No forms yet</h2>

        <p>Create your first form to get started!</p>

        <button
          onClick={() => navigate("/builder")}
        >
          Create New Form
        </button>

      </div>

    </div>

  );
}

export default Dashboard;