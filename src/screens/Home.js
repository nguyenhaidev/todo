import React, { useEffect } from "react";
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

  useEffect(() => {
    cal("100006", "5");
    function makeUser() {
      return {
        name: "David",
        ref: this,
      };
    }

    let user = makeUser();

    console.log(user.ref);

    return () => {};
  }, []);

  return (
    <div className="w-100 d-flex justify-content-center flex-column align-items-center">
      <button className="btn btn-primary" onClick={() => removeAllTask()}>
        Xóa tất cả
      </button>
      <div className={style.taskForm}>
        <TaskForm data={{ id: 1 }} />
      </div>
      <div className={style.taskForm}>
        <ShowAllTask />
      </div>
    </div>
  );
}
