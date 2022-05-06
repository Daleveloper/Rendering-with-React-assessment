import React from "react";
import ActivityList from "./ActivityList";
import Header from "./Header";
import HobbyList from "./HobbyList";

function App() {
  const hobby = [
  "watching birds",
  "hiding in a box",
  "napping",
];

  const dailyActivities = [
    { time: "8:00 am", description: "wake up" },
    { time: "8:30 am", description: "breakfast" },
    { time: "9:00 am", description: "morning nap" },
    { time: "12:00 pm", description: "lunch" },
    { time: "1:00 pm", description: "afternoon nap" },
    { time: "6:00 pm", description: "dinner" },
    { time: "7:00 pm", description: "play" },
    { time: "10:00 pm", description: "bedtime" },
  ];
  return (
    <>
    <Header/>
    <HobbyList hobbies={hobby}/>
    <ActivityList activities={dailyActivities}/>
    </>
  );
}

export default App;

