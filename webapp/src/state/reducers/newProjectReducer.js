import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectDetails: {
    project_title: "",
    project_desc: "",
    project_type: "Single-Slide Project",
    slide_type: "H&E",
  },
  qna: {
    biopsy_adequacy: null,
    if_no_indicate_why: null,
    steatosis: null,
    lobular_inflammation: null,
    hepatocellular_ballooning: null,
  },
};

const newProjectSlice = createSlice({
  name: "newProject",
  initialState: initialState,
  reducers: {
    updateProject: (state, action) => {
      state.projectDetails[action.payload.name] = action.payload.value;
    },
    updateQna: (state, action) => {
      state.qna[action.payload.name] = action.payload.value;
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
      //   state.isAddQna = false;
      //   state.questionnaire = initialState.questionnaire;
    },
  },
});

export const { updateProject, updateQna, resetNewProject } =
  newProjectSlice.actions;

export default newProjectSlice.reducer;
