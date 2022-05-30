const tasks = [
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
];
const Tasks = () => {
  return (
    <>
      {tasks.map(task => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
