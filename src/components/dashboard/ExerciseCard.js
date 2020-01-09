import React from "react";
import "../../App.css";

const ExerciseCard = props => {
  const data = props.data;
  const list = () => {
    if(data) {
      return (
        data.map(item => {
          return (
            <div className="exercise-card-container">
              <div className="card-item">
                <p>{item.name}</p>
              </div>
              <div className="card-item">
                <p>{item.region}</p>
              </div>
            </div>
          )
        })
      );
    }
  }

  return (
      <div>
        {list()}
      </div>
  );
};

export default ExerciseCard;
