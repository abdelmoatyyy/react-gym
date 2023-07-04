import React from "react";

const ExerciseCard = (props) => {
  return (
    <div className="mb-2">
      <img src={props.src} alt="" />
    </div>
  );
};

export default ExerciseCard;
