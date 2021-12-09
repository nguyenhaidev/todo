import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../task/taskSlice";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

import style from "./TaskForm.module.scss";

export default function TaskForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [errorTask, setErrorTask] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (task !== "") setErrorTask("");
    if (description !== "") setErrorDescription("");
    return () => {
      setErrorTask("");
      setErrorDescription("");
    };
  }, [task, description]);

  const onChange = (e) => {
    if (task !== "") setErrorTask("");
    if (description !== "") setErrorDescription("");
    switch (e.target.name) {
      case "task":
        setTask(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    if (task !== "" && description !== "") {
      const newTask = {
        id: Date.now(),
        title: task,
        conpleted: false,
        description: description,
      };
      dispatch(addTask(newTask));
      setTask("");
      setDescription("");
    } else {
      setErrorTask("Không được để trống!");
      setErrorDescription("Không được để trống!");
    }
    e.preventDefault();
  };

  const togglerShow = () => {
    setTask("");
    setDescription("");
    setErrorTask("");
    setErrorDescription("");
    setChecked((prev) => !prev);
  };

  return (
    <div className="w-100 py-2 d-flex justify-content-center">
      <Zoom
        in={!checked}
        style={{
          transitionDelay: checked ? "0ms" : "300ms",
          display: checked ? "none" : "block",
          visibility: checked ? "hiden" : "visible",
        }}
      >
        <button className={style.button__add} onClick={togglerShow}>
          <i class="fa fa-plus" aria-hidden="true" /> Thêm nhiệm vụ
        </button>
      </Zoom>
      <Zoom
        in={checked}
        className="w-100"
        style={{
          transitionDelay: checked ? "300ms" : "0ms",
          display: !checked ? "none" : "block",
          visibility: !checked ? "hiden" : "visible",
        }}
      >
        <Box>
          <Card className={style.card}>
            <CardHeader title={<h1>Thêm nhiệm vụ mới</h1>} />
            <CardContent>
              <form onSubmit={onSubmit} className={style.form}>
                <TextField
                  name="task"
                  error={errorTask === "" ? false : true}
                  variant="standard"
                  className={style.input}
                  type="text"
                  onChange={onChange}
                  value={task}
                  autoComplete="off"
                  helperText={errorTask}
                  label="Tên tác vụ"
                />
                <TextField
                  name="description"
                  error={errorDescription === "" ? false : true}
                  variant="standard"
                  className={style.input}
                  type="text"
                  onChange={onChange}
                  value={description}
                  autoComplete="off"
                  helperText={errorDescription}
                  label="Chi tiết"
                />
              </form>
              <div className="w-100 d-flex justify-content-center mt-2">
                <button
                  className={style.button__secondary}
                  onClick={togglerShow}
                >
                  Đóng
                </button>
                <button className={style.button__primary} onClick={onSubmit}>
                  Thêm
                </button>
              </div>
            </CardContent>
          </Card>
        </Box>
      </Zoom>
    </div>
  );
}
