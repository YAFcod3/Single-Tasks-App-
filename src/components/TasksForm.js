import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlices";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TasksForm() {
  const [task, setTask] = useState({
    tasks: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  //verifico si viene por edit o por add
  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id,tasks]);

  const stateTasks = useSelector((state) => state.tasks);

  console.log(stateTasks);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)

    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);

    if (params.id) {
      //edit
      dispatch(editTask(task))
    } else {
      //add
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };







  return (



    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
            <label htmlFor="title" className="block text-xs font-bold">Title</label>

      <input
        value={task.title}
        name="title"
        type="text"
        placeholder="escribe title"
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label  className="block text-xs font-bold" htmlFor="description">Description</label>
      <textarea
        value={task.description}
        name="description"
        placeholder="description"
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"

      ></textarea>
      <button className="bg-indigo-500 px-2 py-1 rounded-sm">Save</button>
    </form>
  );
}

export default TasksForm;
