import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import { useQuiz } from '../../AuthContext/quizContext';

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const { quizcategory } = useQuiz();

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          "http://localhost:8080/quiz",
          { 
            headers: { 
              Authorization: token 
            } 
          }
        );

        const filteredQuizzes = data.filter(
          ({ category }) => category === quizcategory
        );
        setQuiz(filteredQuizzes);
      } catch (error) {
        console.error('Failed to fetch quiz data:', error);
      }
    };

    fetchQuizData();
  }, [quizcategory]);

  return quiz.length > 0 ? <Question quizdata={quiz} /> : null;
}

export default Quiz;