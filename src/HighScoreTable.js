import React from "react";
import ScoreTable from "./ScoreTable";
import allCountryScores from "./Scores";

const HighScoreTable = () => {
  const sortedCountry = allCountryScores.sort((countryA, countryB) => {
    if (countryA.name > countryB.name) {
      return 1;
    } else if (countryA.name < countryB.name) {
      return -1;
    } else return 0;
  });
  return (
    <div>
      <h1>High scores per country</h1>
      {sortedCountry.map((country) => {
        return <ScoreTable country={country} />;
      })}
    </div>
  );
};
export default HighScoreTable;
