import { useState, useEffect } from "react";
import { useMergeState } from "use-merge-state";

import "../css/AssignTasks.css";

const tasks = [
  {
    description: "do the dishes",
    eta: 1000,
  },
  {
    description: "sweep the house",
    eta: 3000,
  },
  {
    description: "do the laundry",
    eta: 10000,
  },
  {
    description: "take out the recycling",
    eta: 4000,
  },
  {
    description: "make a sammich",
    eta: 7000,
  },
  {
    description: "mow the lawn",
    eta: 20000,
  },
  {
    description: "rake the leaves",
    eta: 18000,
  },
  {
    description: "give the dog a bath",
    eta: 14500,
  },
  {
    description: "bake some cookies",
    eta: 8000,
  },
  {
    description: "wash the car",
    eta: 20000,
  },
];

function AssignTasks(props) {
  const [RobotTasks, setRobotTasks] = useState([]);
  const [currentRobot, setCurrentRobot] = useMergeState({});
  const [tasksAdded, setTasksAdded] = useState(false);
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");
  const [task5, setTask5] = useState("");

  useEffect(() => {
    setCurrentRobot(props.robot);
  }, [setCurrentRobot, props.robot]);

  const handleChange = (e) => {
    let taskIdx = e.target.value;
    if (e.target.id === "1") {
      setTask1({
        ...task1,
        id: taskIdx,
        desc: tasks[taskIdx].description,
        time: tasks[taskIdx].eta,
        complete: false,
      });
    }
    if (e.target.id === "2") {
      console.log("task2");
      setTask2({
        id: taskIdx,
        desc: tasks[taskIdx].description,
        time: tasks[taskIdx].eta,
        complete: false,
      });
    }
    if (e.target.id === "3") {
      console.log("task3");
      setTask3({
        id: taskIdx,
        desc: tasks[taskIdx].description,
        time: tasks[taskIdx].eta,
        complete: false,
      });
    }
    if (e.target.id === "4") {
      console.log("task4");
      setTask4({
        id: taskIdx,
        desc: tasks[taskIdx].description,
        time: tasks[taskIdx].eta,
        complete: false,
      });
    }
    if (e.target.id === "5") {
      console.log("task5");
      setTask5({
        id: taskIdx,
        desc: tasks[taskIdx].description,
        time: tasks[taskIdx].eta,
        complete: false,
      });
    }
  };

  const assignTasks = (e) => {
    e.preventDefault();

    // console.log("task1:", task1);
    // console.log("task2:", task2);
    // console.log("task2:", task3);
    // console.log("task2:", task4);
    // console.log("task2:", task5);
    setRobotTasks([task1, task2, task3, task4, task5]);
    // props.setAssignTrigger(false);
  };

  const checkTasksAdded = () => {
    if (RobotTasks.length > 0) {
      setTasksAdded(true);
      props.setRobot({ ...currentRobot, task: RobotTasks });
      console.log(currentRobot);
    }
  };

  console.log(props);

  return props.assignTrigger ? (
    <div>
      <div className="assignTasks">
        <h2>Assign 5 tasks for </h2>
        <h3>Robot Name : {props.robot.name} </h3>
        <h3>Robot Type : {props.robot.type}</h3>
        <h4>
          Check it out if the tasks get assigned on clicking the Check
          button,otherwise assign again.
        </h4>
        <p>
          <label>Choose Task 1 : </label>
          <select id="1" onChange={(e) => handleChange(e)}>
            <option> Select a task from the list </option>
            {tasks.map((task) => (
              <option key={tasks.indexOf(task)} value={tasks.indexOf(task)}>
                {task.description} required {task.eta} Seconds
              </option>
            ))}
          </select>
        </p>
        <p>
          <label>Choose Task 2 : </label>
          <select id="2" onChange={(e) => handleChange(e)}>
            <option> Select a task from the list </option>
            {tasks.map((task) => (
              <option key={tasks.indexOf(task)} value={tasks.indexOf(task)}>
                {task.description} required {task.eta} Seconds
              </option>
            ))}
          </select>
        </p>
        <p>
          <label>Choose Task 3 : </label>
          <select id="3" onChange={(e) => handleChange(e)}>
            <option> Select a task from the list </option>
            {tasks.map((task) => (
              <option key={tasks.indexOf(task)} value={tasks.indexOf(task)}>
                {task.description} required {task.eta} Seconds
              </option>
            ))}
          </select>
        </p>
        <p>
          <label>Choose Task 4 : </label>
          <select id="4" onChange={(e) => handleChange(e)}>
            <option> Select a task from the list </option>
            {tasks.map((task) => (
              <option key={tasks.indexOf(task)} value={tasks.indexOf(task)}>
                {task.description} required {task.eta} Seconds
              </option>
            ))}
          </select>
        </p>
        <p>
          <label>Choose Task 5 : </label>
          <select id="5" onChange={(e) => handleChange(e)}>
            <option> Select a task from the list </option>
            {tasks.map((task) => (
              <option key={tasks.indexOf(task)} value={tasks.indexOf(task)}>
                {task.description} required {task.eta} Seconds
              </option>
            ))}
          </select>
        </p>
        <p>
          <button id="submit" type="submit" onClick={(e) => assignTasks(e)}>
            Assign those Tasks
          </button>
        </p>
        {tasksAdded ? (
          <div>
            <h4>{RobotTasks.length} tasks have been added </h4>
            <p>{RobotTasks[0].desc}</p>
            <p>{RobotTasks[1].desc}</p>
            <p>{RobotTasks[2].desc}</p>
            <p>{RobotTasks[3].desc}</p>
            <p>{RobotTasks[4].desc}</p>
          </div>
        ) : null}
        <p>
          <button id="btnChk" onClick={() => checkTasksAdded()}>
            Check
          </button>
          <button id="close" onClick={() => props.setAssignTrigger(false)}>
            Close
          </button>
        </p>
      </div>
    </div>
  ) : null;
}

export default AssignTasks;
