import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  color: ${(props)=> (props.selected? "yellow" : "red")};
  background-color: #aa2525;
`;

function Banner({ title, description, numOfStudents }) {
    const [selected, setSelected] = useState(true)
  
  return (
    <Div selected={selected}>
        <button onClick={()=>setSelected((s)=>!s)}>Change</button>
      <hr />
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{numOfStudents}Students</span>
      <hr />
    </Div>
  );
}
export default Banner;
