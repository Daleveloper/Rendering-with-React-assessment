import React from "react";
import "./ActivityList.css";
import Activity from "./Activity"

function ActivityList({activities}) {
  const rows = activities.map(({time, description}, index) =>(
    <Activity time={time} description={description}/>
  ));
  return (
<table className="container">
  <tbody className= "body">{rows}</tbody>
</table>
  

  );
}

export default ActivityList;

