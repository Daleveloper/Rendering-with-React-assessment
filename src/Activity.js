import React from "react";
import "./Activity.css";

function Activity({ time, description }) {
  return (
    <tr>
      <td className="td">{time}</td>
      <td className="td2">{description}</td>
    </tr>
  );
}

export default Activity;