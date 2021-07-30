import { useState, useEffect } from "react";

const TaskList = (props) => {
  const [currentRobot, setCurrentRobot] = useState("");

  useEffect(() => {
    setCurrentRobot(props.robot);
    console.log("robot with tasks list: ", props.robot);
  }, [props.robot]);

  console.log(props);

  let tasks = currentRobot.tasks || null;
  console.log(tasks);

  return (
    <div>
      <h3>
        {currentRobot.name} {currentRobot.type}
      </h3>
      {tasks !== null ? (
        <table id="taskTable">
          <thead id="header">
            <tr>
              <th>Task</th>
              <th>Assigned Time</th>
              <th>Time left</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td> {task.description} </td>
                <td> {task.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <h4>No tasks is going on now</h4>
        </div>
      )}
    </div>
  );
};

export default TaskList;
