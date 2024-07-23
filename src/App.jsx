import React, { useState, useEffect } from "react";

function Joke() {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    fetch("https://api.balldontlie.io/v1/teams", {
      method: "GET",
      headers: {
        "Authorization": "b6d96966-833f-47aa-8cab-6c185622d883",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.data);
        console.log(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>BALL DONT LIE</h2>
      
      {joke.map((d, i) => (
        <ul key={i}>
            <li>
                <p>{d.full_name}</p>
            </li>
        </ul>
      ))}
    </div>
  );
}
export default Joke;