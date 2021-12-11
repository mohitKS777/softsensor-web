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
<<<<<<< HEAD
  membersInfo: [],
  slides: [],
  uploadedFile: "",
=======
  qna: {
    biopsy_adequacy: null,
    if_no_indicate_why: null,
    steatosis: null,
    lobular_inflammation: null,
    hepatocellular_ballooning: null,
  },
>>>>>>> 075ab2e6e9f9f202cb7c1373b6aa1da46abf5594
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
<<<<<<< HEAD
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
=======
      state.members.push(action.payload);
    },
    // addQuestion: (state) => {
    //   state.questionnaire.push({ question: "", description: "", answer: "" });
    // },
    // removeQuestion: (state, action) => {
    //   state.questionnaire.splice(action.payload.id, 1);
    // },
    // updateQuestion: (state, action) => {
    //   state.questionnaire[action.payload.index].question =
    //     action.payload.question;
    // },
    // updateDescription: (state, action) => {
    //   state.questionnaire[action.payload.index].description =
    //     action.payload.description;
    // },
    // updateAnswer: (state, action) => {
    //   state.questionnaire[action.payload.index].answer = action.payload.answer;
    // },
    // updateisAddQna: (state, action) => {
    //   state.isAddQna = action.payload;
    // },
    resetNewProject: (state) => {
      state.projectDetails = initialState.projectDetails;
      state.members = initialState.members;
>>>>>>> 075ab2e6e9f9f202cb7c1373b6aa1da46abf5594
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
<<<<<<< HEAD
  updateFile,
  addMembersInfo,
  addSlides,
=======
>>>>>>> 075ab2e6e9f9f202cb7c1373b6aa1da46abf5594
} = newProjectSlice.actions;

export default newProjectSlice.reducer;
