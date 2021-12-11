import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../components/Qna/questions";

const initialState = {
  projectDetails: {
    projectName: "",
    projectDescription: "",
    projectType: "singleSlide",
    slideType: "H&E",
    cases: [],
  },
  questions: questions["H&E"],
  members: [],
  membersInfo: [],
  slides: [],
  uploadedFile: "",
};

const newProjectSlice = createSlice({
  name: "newProject",
  initialState: initialState,
  reducers: {
    updateProject: (state, action) => {
      state.projectDetails[action.payload.name] = action.payload.value;
      if (action.payload.name === "slideType")
        state.questions = questions[action.payload.value];
    },
    updateCases: (state, action) => {
      state.projectDetails["cases"] = action.payload;
    },
    updateQna: (state, action) => {
      state.qna[action.payload.name] = action.payload.value;
    },
    addMembers: (state, action) => {
      state.members.push(action.payload.email);
      state.membersInfo.push({
        ...action.payload.info,
        email: action.payload.email,
      });
    },
    updateFile: (state, action) => {
      state.uploadedFile = action.payload;
    },
    addSlides: (state, action) => {
      state.slides = action.payload;
      console.log(state.slides);
    },
    resetNewProject: (state) => {
      state.projectDetails = initialState.projectDetails;
      state.members = initialState.members;
      state.membersInfo = initialState.membersInfo;
      //   state.isAddQna = false;
      //   state.questionnaire = initialState.questionnaire;
    },
  },
});

export const {
  updateProject,
  updateQna,
  resetNewProject,
  updateCases,
  addMembers,
  updateFile,
  addMembersInfo,
  addSlides,
} = newProjectSlice.actions;

export default newProjectSlice.reducer;
