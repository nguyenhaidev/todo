import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  updateTask,
  removeTask,
  selectTasks,
  togglerComplete,
  removeAll,
} from "./taskSlice";
import moment from "moment";
import "moment/locale/vi";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "./ShowAllTask.module.scss";

export function ShowTask(props) {
  const { title, description, completed } = props;
  const dispatch = useDispatch();

  const toggleCheck = (task) => {
    dispatch(togglerComplete(task));
  };

  return (
    <Accordion className="my-1 py-2" sx={{ borderRadius: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="border-bottom"
      >
        <Typography className="row justify-content-start align-items-center w-100 ">
          <div
            className="col text-left"
            style={{ fontSize: 16, fontWeight: "bold" }}
          >
            {title}
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="d-flex flex-column align-items-start justify-content-center pl-3">
          <div className="row">
            <div className="col">
              {description ? description : "Chưa cập nhật"}
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row mt-2 w-100 ">
            <div className="px-1">
              <button className={`col btn ${style.button__primary}`}>
                <span>Lưu</span>
              </button>
            </div>
            <div className="px-1">
              <button className={`col btn ${style.button__secondary}`}>
                Hủy
              </button>
            </div>
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function ShowAllTask() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const toggleCheck = (task) => {
    dispatch(togglerComplete(task));
  };

  const deleteTask = (task) => {
    dispatch(removeTask(task));
  };
  const togglerEdit = (task) => {
    dispatch(updateTask(task));
  };

  return (
    <div>
      <ul className="list-group">
        {tasks &&
          tasks.map((todo) => (
            <ShowTask {...todo} />
            // <li key={todo.id} className="row my-1 align-items-center">
            //   <div className="col justify-content-center row">
            //     <p className="w-50 text-left">{todo.title}</p>
            //   </div>
            //   <div className="col">{moment(todo.id).format("LT L")}</div>
            //   <div className="col">
            //     <Checkbox
            //       checked={todo.completed}
            //       onChange={() => toggleCheck(todo)}
            //       sx={{
            //         color: "white",
            //         "&.Mui-checked": {
            //           color: "white",
            //         },
            //       }}
            //     />
            //   </div>
            //   <div className="col">
            //     <button
            //       className="btn btn-danger"
            //       onClick={() => deleteTask(todo)}
            //     >
            //       Xóa
            //     </button>
            //     <button
            //       className="btn btn-primary"
            //       onClick={() => togglerEdit(todo)}
            //     >
            //       Sửa
            //     </button>
            //   </div>
            // </li>
          ))}
        {tasks.length === 0 && <h1 className="text-danger">Trống</h1>}
      </ul>
    </div>
  );
}
