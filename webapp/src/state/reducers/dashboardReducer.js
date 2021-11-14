import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    activeOption: "projects",
  },
  reducers: {
    setActiveOption: (state, action) => {
      state.activeOption = action.payload;
    },
  },
});

export const { setActiveOption } = dashboardSlice.actions;

export default dashboardSlice.reducer;
