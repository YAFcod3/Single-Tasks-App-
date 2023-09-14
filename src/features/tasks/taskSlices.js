import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Tasks 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Tasks 2 description",
    completed: true,
  },
];

export const taskSlice = createSlice({
  name: "tasks", //state
  initialState,
  reducers: {
    addTask: (state, action) => {
      // console.log('STATE: ',state, 'ACTION: ' ,action)
      // console.log('TYPE del action: ',action.type)
      // console.log("PAYLOAD del action: ", action.payload);
      state.push(action.payload);
    },



    editTask: (state, action) => {
      // console.log("PAYLOAD del action: ", action.payload);
      const {id,title,description}=action.payload
      const foundTask= state.find(task => task.id === id)
      if(foundTask){
        

        //actualizo
        foundTask.title=title
        foundTask.description=description
      }
    },



    deleteTask: (state, action) => {
      // console.log('PAYLOAD del action: ', action.payload)
      // console.log('TYPE del action: ',action.type)
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound, 1));
      }
    },
  },
});
export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer; //devuleve solo los reducers
