// @ts-nocheck

// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import error from "../middleware/error";
import logger from "redux-logger";
import tasksReducer from "./tasks/tasksSlice";

// import log  from "../middleware/log";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
  },
  //   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log],
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    error,
  ],
  devTools: import.meta.env.MODE === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
