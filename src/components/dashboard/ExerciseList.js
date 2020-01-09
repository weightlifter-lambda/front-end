import React, {useState, useEffect} from "react";
import ExerciseCard from './ExerciseCard';
import axios from 'axios';
import "../../App.css";

const ExerciseList = props => {

  const [id] = useState(+localStorage.getItem("id"));
  const [userId] = useState({
    userId: id
  });
  console.log(userId);

  // https://weight-lifting-journal-3.herokuapp.com/api/journals/exercises/:userId/:id

  useEffect( () => {
    axios
      .get(`https://weight-lifting-journal-3.herokuapp.com/api/journals/exercises`)
      .then( response => {
        console.log(response);
      })
  })

  return (
    <div className="journal-entry">
      <ExerciseCard />
    </div>
  );
};

export default ExerciseList;

