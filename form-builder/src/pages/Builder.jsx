import { useState } from "react";

import Header from "../components/Header";
import FormHeader from "../components/FormHeader";
import QuestionCard from "../components/QuestionCard";

function Builder() {

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "",
      type: "Short Answer",
      required: false
    }
  ]);

  // ADD QUESTION AFTER CURRENT
  const addQuestion = (currentIndex) => {

    const newQuestion = {
      id: Date.now(),
      question: "",
      type: "Short Answer",
        required: false
    };

    const newQuestions = [...questions];
    newQuestions.splice(currentIndex + 1, 0, newQuestion);
    setQuestions(newQuestions);
  };

  // DELETE QUESTION
  const deleteQuestion = (id) => {

    const filteredQuestions =
      questions.filter((q) => q.id !== id);

    setQuestions(filteredQuestions);
  };

  // DUPLICATE QUESTION
  const duplicateQuestion = (currentIndex) => {

    const copiedQuestion = {
      ...questions[currentIndex],
      id: Date.now()
    };

    const newQuestions = [...questions];
    newQuestions.splice(currentIndex + 1, 0, copiedQuestion);
    setQuestions(newQuestions);
  };
  const toggleRequired = (id) => {

  const updatedQuestions =
    questions.map((q) => {

      if(q.id === id){

        return {
          ...q,
          required: !q.required
        };

      }

      return q;

    });

  setQuestions(updatedQuestions);

};

  // UPDATE QUESTION
  const updateQuestion = (id, field, value) => {

    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, [field]: value } : q
    );

    setQuestions(updatedQuestions);
  };

  return (

    <div className="container">

      <Header />

      <FormHeader />

      {

        questions.map((question, index) => (

          <QuestionCard
            key={question.id}

            questionData={question}
            
            index={index}

            addQuestion={addQuestion}

            deleteQuestion={deleteQuestion}

            duplicateQuestion={duplicateQuestion}
            toggleRequired={toggleRequired}

            updateQuestion={updateQuestion}
          />

        ))

      }

    </div>

  );
}

export default Builder;