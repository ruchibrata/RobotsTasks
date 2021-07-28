import { useState } from "react";

import "../css/Robots.css";

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
    alert(robotName);
    alert(roboType);
    setRobots([
      ...robots,
      {
        id: robots.length + 1,
        name: robotName,
        type: roboType,
      },
    ]);
    console.log(robots.length);
    console.log("robots: ", robots);
  };

  return (
    <div className="container">
      <div className="addRobots">
        <label htmlFor="robotName">Add the Robot Name:</label>
        <input
          type="text"
          name="robotName"
          value={robotName}
          onChange={(e) => handleNameChange(e)}
        />

        <label>Choose the Robot Types:</label>
        <select value={roboType} onChange={(e) => handleTypeChange(e)}>
          <option value="Unipedal">UNIPEDAL</option>
          <option value="Bipedal">BIPEDAL</option>
          <option value="Quadrupedal">QUADRUPEDAL</option>
          <option value="Arachnid">ARACHNID</option>
          <option value="Radial">RADIAL</option>
          <option value="Aeronautical">AERONAUTICAL</option>
        </select>

        <button type="submit" onClick={addRobots}>
          Add Robot
        </button>
      </div>
      <h2>Robot List</h2>
      <div className="robotList">
        <table id="roboTable">
          <thead id="header">
            <tr>
              <th>Robot Name</th>
              <th>Robot Type</th>
            </tr>
          </thead>
          <tbody>
            {robots.map((robot) => (
              <tr key={robot.id}>
                <td> {robot.name} </td>
                <td> {robot.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Robots;
