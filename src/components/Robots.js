import { useState } from "react";

import "../css/Robots.css";
import RobotList from "./RobotList";

const Robots = () => {
  const [robotName, setRobotName] = useState("");
  const [roboType, setRoboType] = useState("Unipedal");
  const [robots, setRobots] = useState([]);

  const handleNameChange = (e) => {
    setRobotName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setRoboType(e.target.value);
  };

  const addRobots = () => {
    setRobots([
      ...robots,
      {
        id: robots.length + 1,
        name: robotName,
        type: roboType,
      },
    ]);
  };

  return (
    <div className="container">
      <div className="addRobots">
        <label htmlFor="robotName">Give a name to the Robot :</label>
        <input
          type="text"
          name="robotName"
          value={robotName}
          onChange={(e) => handleNameChange(e)}
        />

        <label>Choose the Robot Types :</label>
        <select value={roboType} onChange={(e) => handleTypeChange(e)}>
          <option value="Unipedal">UNIPEDAL</option>
          <option value="Bipedal">BIPEDAL</option>
          <option value="Quadrupedal">QUADRUPEDAL</option>
          <option value="Arachnid">ARACHNID</option>
          <option value="Radial">RADIAL</option>
          <option value="Aeronautical">AERONAUTICAL</option>
        </select>

        <button type="submit" onClick={addRobots}>
          Create the Robot
        </button>
      </div>
      <h2>Avaiable Robot List</h2>

      <RobotList robots={robots} />
    </div>
  );
};

export default Robots;
