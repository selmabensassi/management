
import  {  useState  } from "react";
function QuestionAnswer({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
  
    const handleClick = () => {
      setShowAnswer(!showAnswer);
    };
  
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={`genques-heading-${question}`}>
          <button
            className="accordion-button"
            onClick={handleClick}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#genques-collapse-${question}`}
            aria-expanded={showAnswer}
            aria-controls={`genques-collapse-${question}`}
          >
            {question}
          </button>
        </h2>
        <div
          id={`genques-collapse-${question}`}
          className={`accordion-collapse collapse ${showAnswer ? 'show' : ''}`}
          aria-labelledby={`genques-heading-${question}`}
          data-bs-parent="#genques-accordion"
        >
          <div className="accordion-body ff-secondary">{answer}</div>
        </div>
      </div>
    );
  }
  export default QuestionAnswer