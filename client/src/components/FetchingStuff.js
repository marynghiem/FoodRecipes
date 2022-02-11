import React, { useEffect, useState } from "react";

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
      <div>{JSON.stringify(data)}</div>
      {data?.results?.length > 0 && <div>{data.results[0].title}</div>}
      {data?.results?.length > 0 && <img src={data.results[0].image} alt={data.results[0].title}></img>}
    </div>
  );
};
