import {
  FaCopy,
  FaTrash
} from "react-icons/fa";

function QuestionCard({

  questionData,
  index,
  addQuestion,
  deleteQuestion,
  duplicateQuestion,
  updateQuestion,
  toggleRequired


}) {

  return (

    <div className="question-card">

      <div className="question-top">

        <input
          type="text"
          placeholder="Enter question"
          className="question-input"
          value={questionData.question}
          onChange={(e) => updateQuestion(questionData.id, "question", e.target.value)}
        />

        <select 
          className="question-select"
          value={questionData.type}
          onChange={(e) => updateQuestion(questionData.id, "type", e.target.value)}
        >

          <option>Short Answer</option>

          <option>Paragraph</option>

          <option>Multiple Choice</option>

          <option>Checkboxes</option>

          <option>Dropdown</option>

        </select>

      </div>

      <div className="answer-preview">

        <input
          type="text"
          placeholder="User answer here"
        />

      </div>

      <div className="question-footer">

        <div className="required-section">

          <label className="switch">

            <input
              type="checkbox"
              checked={questionData.required}
              onChange={() =>
                toggleRequired(questionData.id)
              }
            />

            <span className="slider round"></span>

          </label>

          <span>Required</span>

        </div>

        <div className="question-actions">

          <FaCopy
            className="action-icon"
            title="Duplicate"
            onClick={() =>
              duplicateQuestion(index)
            }
          />

          <FaTrash
            className="action-icon delete-icon"
            title="Delete"
            onClick={() =>
              deleteQuestion(questionData.id)
            }
          />

          <button
            className="add-question-btn"
            onClick={() => addQuestion(index)}
          >

            +

          </button>

        </div>

      </div>

    </div>

  );
}

export default QuestionCard;