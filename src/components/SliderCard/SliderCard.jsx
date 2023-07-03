import React from "react";

const SliderCard = (props) => {
  return (
    <div
      className="card"
      style={{
        // width: "250px",
        // height: "200px",
        background: "#fff",
        borderTop: "4px solid #FF2625",
        borderBottomLeftRadius: "20px",
        textDecoration: "none",
        display: "flex",
        // justifyContent: "space-between",
        flexDirection: "column",
        paddingBottom: "10px",
        transform: "scale(1, 1)",
        transition: "0.3s all ease-in-out",
        backgroundColor: "#23241f",
        cursor: "pointer",
      }}
    >
      <div className="card-body d-flex justify-content-center flex-column">
        <img
          src="https://github.com/adrianhajdin/project_fitness_app/blob/main/src/assets/icons/gym.png?raw=true"
          alt=""
          className="mx-auto w-25 mt-3"
        />
        <h3
          className="text-center mt-3 "
          style={{ fontSize: "25px", color: "white" }}
        >
          {props.name}
        </h3>
      </div>
    </div>
  );
};

export default SliderCard;
