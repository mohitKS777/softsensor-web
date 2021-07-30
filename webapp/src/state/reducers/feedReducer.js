import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    activityFeed: [],
  },
  reducers: {
    updateActivityFeed: (state, action) => {
      state.activityFeed = action.payload;
    },
  },
});

export const { updateActivityFeed } = feedSlice.actions;

export default feedSlice.reducer;
