import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "food shopping",
      day: "feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const deleteTask = id => {
    setTasks(tasks.filter(tasks => tasks.id !== id));
  };
  const toggleReminder = id => {
    console.log(id);
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        " No Tasks To Show"
      )}
    </div>
  );
}

export default App;
