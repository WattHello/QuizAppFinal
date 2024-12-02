import React, { useState ,useEffect} from 'react'
import { useAuth } from '../../AuthContext/AuthContext'
import axios from 'axios';
import Question from './Question';
import { useQuiz } from '../../AuthContext/quizContext';

function Quiz() {
    const[quiz,setQuiz]=useState([]);
    const {quizcategory}=useQuiz();
  
    useEffect(()=>{
        (
          async ()=>{
              try{
              const {data:data}=await axios.get("http://localhost:8080/quiz",
              {headers:{Authorization:localStorage.getItem("token")}});
            
              const filterdata=data.filter(({category})=>category===quizcategory);
               console.log(filterdata);
              setQuiz([...filterdata]);
             
              }
              catch(err){
                console.log(err);
              }
        }
       
       )()
      
       },[quizcategory]);
  return (
    <>
    {quiz&&quiz.length>0&&<Question quizdata={quiz}/>}
    </>
  )
}

export default Quiz