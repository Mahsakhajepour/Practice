import { useState } from "react";

function CourseCard({ data: { name, description } }) {
  const [selected, setSelected] = useState(true);

  const cssStyle = {
    color: "red",
    border: "red 1px solid",
    margin: "10px",
    backgroundColor: "silver",
  };

  const selectedClass = {
    color: "green",
  };

  return (
    <li >
      <h4>{name}</h4>
      <p>{description}</p>
      <button onClick={() => setSelected((s) => !s)}>change</button>
    </li>
  );
}

export default CourseCard;
