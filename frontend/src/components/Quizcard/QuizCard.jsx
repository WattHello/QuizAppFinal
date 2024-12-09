import React from 'react';
import './QuizCard.css';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../AuthContext/quizContext';

function QuizCard({ QuizDetails }) {
  const navigate = useNavigate();
  const { quizDispatch } = useQuiz();
  const { image, title, description, category } = QuizDetails;

  const handleQuizStart = () => {
    const token = localStorage.getItem('token');
    localStorage.setItem('category', category);
    
    quizDispatch({
      type: "CATEGORY",
      payload: category
    });

    navigate(token ? '/quiz' : '/auth/login');
  };

  return (
    <div className="quiz-card-container">
      <div className="quiz-image-container">
        <img className="quiz-image" src={image} alt={title} />
      </div>
      <div className="quiz-card-details">
        <h2 className="quiz-card-font quiz-card-title">{title}</h2>
        <p className="quiz-card-font description">{description}</p>
        <button className="quiz-card-btn" onClick={handleQuizStart}>
          Play Now
        </button>
      </div>
    </div>
  );
}

export default React.memo(QuizCard);