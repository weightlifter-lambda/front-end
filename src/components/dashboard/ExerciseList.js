import React, {useState, useEffect} from "react";
import ExerciseCard from './ExerciseCard';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import "../../App.css";

const ExerciseList = () => {
  const [data, setData] = useState();
  useEffect( () => {
    axiosWithAuth()
    .get('/exercises')
    .then(response => {
      console.log(response);
      setData(response.data);
    })
    .catch(error => {
        console.log('DATA NOT RETURNED', error);
    });
  }, []);
  
  return (
    <div className="exercise-list">
      <ExerciseCard data={data} />
    </div>
  );
};

export default ExerciseList;
