import React from "react";
import { useDispatch } from "react-redux";
import ShowAllTask from "../features/task/ShowAllTask";
import TaskForm from "../features/task/TaskForm";
import { removeAll } from "../features/task/taskSlice";

import style from "./Home.module.scss";

export default function Home() {
  const dispatch = useDispatch();
  const removeAllTask = () => {
    dispatch(removeAll());
  };
  return (
    <div className="w-100 d-flex justify-content-center flex-column align-items-center">
      <button className="btn btn-primary" onClick={() => removeAllTask()}>
        Xóa tất cả
      </button>
      <div className={style.taskForm}>
        <TaskForm />
      </div>
      <div className={style.taskForm}>
        <ShowAllTask />
      </div>
    </div>
  );
}
