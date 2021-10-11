import { createSlice } from "@reduxjs/toolkit";

const viewerSlice = createSlice({
  name: "viewer",
  initialState: {
    viewerIds: ["viewer1"],
    currentViewer: "viewer1",
    isMultiView: false,
  },
  reducers: {
    addViewer: (state, action) => {
      state.viewerIds.push(action.payload);
    },
    removeViewer: (state, action) => {
      state.viewerIds = state.viewerIds.filter(
        (viewerId) => viewerId !== action.payload
      );
    },
    updateCurrentViewer: (state, action) => {
      state.currentViewer = action.payload;
    },
    toggleMultiView: (state) => {
      state.isMultiView = !state.isMultiView;
    },
  },
});

export const { addViewer, removeViewer, updateCurrentViewer, toggleMultiView } =
  viewerSlice.actions;

export default viewerSlice.reducer;
