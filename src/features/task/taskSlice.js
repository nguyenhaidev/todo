import {
  // createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

//Kiểm tra phần tử myTodoList đã tồn tại trong localStorage hay chưa? Nếu chưa tồn tại thì tạo một phần tử myTodoList
if (!localStorage.myTodoList) {
  localStorage.setItem("myTodoList", JSON.stringify([]));
}

//Khai báo initialState theo phần tử myTodoList trong localStorage
const initialState = JSON.parse(localStorage.myTodoList);

//Khai báo hàm cập nhật giá trị của myTodoList
const setLocalStorage = (value) => {
  localStorage.setItem("myTodoList", JSON.stringify(value));
};

//Khai báo slide
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    //Thêm công việc mới
    addTask: (state, action) => {
      console.log(action.payload);
      state.push({
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        description: action.payload.description,
      });
      setLocalStorage(state);
    },
    //Xóa công việc mới
    removeTask: (state, action) => {
      const result = state.filter((task) => task.id !== action.payload.id);
      setLocalStorage(result);
      return result;
    },
    //Cập nhật hoàn thành công việc
    togglerComplete: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = !action.payload.completed;
      setLocalStorage(state);
    },
    //Cập nhật công việc
    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index] = action.payload;
      setLocalStorage(state);
    },
    //Xóa tất cả
    removeAll: (state, action) => {
      console.log(state);
      const empty = [];
      setLocalStorage(empty);
      return empty;
    },
  },
});

export const selectTasks = (state) => state.todo;

export const { addTask, removeTask, togglerComplete, updateTask, removeAll } =
  taskSlice.actions;

export default taskSlice.reducer;
