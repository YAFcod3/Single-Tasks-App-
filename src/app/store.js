import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlices";

//es como el useState
export const store = configureStore({

  reducer: {
    tasks: tasksReducer,

  },
});
