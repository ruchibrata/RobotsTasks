import { useState } from "react";

import AssignTasks from "./AssignTasks";
import TaskList from "./TaskList";

const RobotList = (props) => {
  const robots = props.robots;
  const [assignTrigger, setAssignTrigger] = useState(false);
  const [taskTrigger, setTaskTrigger] = useState(false);
  const [robot, setRobot] = useState({});

  const showAssignTasks = (e, robot) => {
    setTaskTrigger(false);
    setAssignTrigger(true);
    setRobot(robot);
  };

  const showTasksDetails = (e, robot) => {
    setTaskTrigger(true);
    setAssignTrigger(false);
    setRobot(robot);
  };

  return (
    <div className="robotList">
      <table id="roboTable">
        <thead id="header">
          <tr>
            <th>Robot Name</th>
            <th>Robot Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id}>
              <td> {robot.name} </td>
              <td> {robot.type}</td>
              <td>
                <button onClick={(e) => showAssignTasks(e, robot)}>
                  Assign Tasks
                </button>
                <button onClick={(e) => showTasksDetails(e, robot)}>
                  Show Tasks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AssignTasks
        assignTrigger={assignTrigger}
        robot={robot}
        setAssignTrigger={setAssignTrigger}
      />
      <div>
        {taskTrigger ? (
          <TaskList taskTrigger={taskTrigger} robot={robot} />
        ) : null}
      </div>
    </div>
  );
};

export default RobotList;
