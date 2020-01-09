import React, {useState, useEffect} from "react";
import ExerciseCard from './ExerciseCard';
import axios from 'axios';
import "../../App.css";

const ExerciseList = () => {
  const [token] = useState(localStorage.getItem("token"));
  const [data, setData] = useState();

  useEffect( () => {
    axios.get('https://weight-lifting-journal-3.herokuapp.com/api/journals/exercises/:userId/:id', {
      headers: {
        authorization: token
      }
    })
    .then(response => {
      console.log(response);
      setData(response.data);
    })
    .catch(error => {
        console.log('DATA NOT RETURNED', error);
    });
  }, []);
  

  return (
    <div className="journal-entry">
      <ExerciseCard data={data} />
    </div>
  );
};

export default ExerciseList;

