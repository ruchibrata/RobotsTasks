import { useState, useEffect } from "react";

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
  const [currentRobot, setCurrentRobot] = useState("");
  const [addTasks, setAddTasks] = useState(false);
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");
  const [task5, setTask5] = useState("");

  useEffect(() => {
    (async () => {
      if (addTasks) {
        console.log("add the tasks");
        setCurrentRobot({ ...currentRobot, tasks: RobotTasks });
      }
      const robot1 = await setCurrentRobot(props.robot);
      console.log("robot with tasks list: ", robot1);
    })();
  });

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
    console.log(RobotTasks);
    setAddTasks(true);
    props.setAssignTrigger(false);
  };
  console.log(props);

  return props.assignTrigger ? (
    <form>
      <div className="assignTasks">
        <h2>Assign 5 tasks for </h2>
        <h3>Robot Name : {props.robot.name} </h3>
        <h3>Robot Type : {props.robot.type}</h3>

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
          <button type="submit" onClick={(e) => assignTasks(e)}>
            Assign those Tasks
          </button>
          <button onClick={() => props.setAssignTrigger(false)}>Cancel</button>
        </p>
      </div>
    </form>
  ) : null;
}

export default AssignTasks;
