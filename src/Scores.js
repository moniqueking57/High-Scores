import React from "react";
import allCountryScores from "./ScoreTable.js";

const Scores = (props) => {
  console.log(props);
  const { country } = props;
  return (
    <div className="test">
      <h2>High scores: {country.name}</h2>
      <table class="table">
        <tbody>
          {country.scores.map((score) => {
            return (
              <tr>
                <td>{score.n}</td>
                <td>{score.s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Scores;
