import { useEffect, useState } from "react";

export type Task = {
  id: number;
  title: string;
  done: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/tasks");
        console.log("Fetching data.");
        const data = await res.json();
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks!", error);
      }
    };
    load();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <div>
        {tasks &&
          tasks.map((task) => (
            <div key={task.id}>
              {task.id}. {task.title} -{" "}
              <span>
                <input type="checkbox" checked={task.done} readOnly />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
