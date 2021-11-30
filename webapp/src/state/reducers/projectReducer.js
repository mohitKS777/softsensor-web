import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: {},
  },
  reducers: {
    addProject: (state, action) => {
      state.projects[action.payload.id] = action.payload;
    },
    removeProject: (state, action) => {
      delete state.projects[action.payload.id];
    },
  },
});

export const { addProject, removeProject } = projectSlice.actions;

export default projectSlice.reducer;
