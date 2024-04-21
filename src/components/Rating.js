import React from 'react';
import starActive from "../assets/Pictures/star-active.svg";
import starInactive from "../assets/Pictures/star-inactive.svg";
import "../styles/Rates.css";


function Rate(rating) {
        const score = rating.score;
        const star = [1, 2, 3, 4, 5];
    return (
      <div className="rate-contenair">
        {star.map((star) =>
          score >= star ? (
            <img
              key={star.toString()}
              className="etoile"
              src={starActive}
              alt="star"
            />
          ) : (
            <img
              key={star.toString()}
              className="etoile"
              src={starInactive}
              alt="star"
            />
          )
        )}
      </div>
    );
}

export default Rate;