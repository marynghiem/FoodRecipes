import React, { useEffect, useState } from "react";
import "../css/Home/FetchingStuff.css";

export const FetchingStuff = () => {
  // const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=<redacted>&query=pasta";
  const url = "/express_backend";
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((exception) => console.error(exception));
  }, []);

  return (
    <div>
      <div className="dataResultsContainer">
        {data?.results?.length > 0 &&
          data.results.map((result) => (
            <div className="dataResultsIndividualContainer">
              <img src={result.image} alt={result.title} className="dataResultsImage"></img>
              <div className="dataResultsTitle">{result.title}</div>
            </div>
          ))}
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
