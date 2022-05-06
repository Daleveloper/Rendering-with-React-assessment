import React from "react";
import "./HobbyList.css";


function HobbyList({hobbies}) {
  const hobbiesList = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
  if(hobbiesList.length > 0){
    return (
<main >    
<div className= "header3">
  <h4>Hobbies</h4>
  </div>
<div className="list">
  <ul>{hobbiesList}</ul>
</div>
</main>
  );
}return null;
}
  export default HobbyList;

