import { useEffect } from "react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  useEffect(function () {
    document.addEventListener("keypress", onKeyPress);
  }, []);

  if (answer === null) return null;

  function onKeyPress(e) {
    if (e.key === "Enter" && index < numQuestions - 1) {
      dispatch({ type: "nextQuestion" });
    }
  }

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
