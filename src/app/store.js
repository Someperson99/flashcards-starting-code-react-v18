import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/topicsSlice";
import quizzesSlice from "../features/quizzes/quizzesSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesSlice
  },
});
