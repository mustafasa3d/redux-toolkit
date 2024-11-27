// @ts-nocheck

const error = (state) => (next) => (action) => {
  console.log("----------------------------------");

  if (action.type === "SHOW_ERROR") {
    console.log("state", action.payload.error);
  } else {
    //   return next(action);
    next(action);
  }

  console.log("---------------------------------- ");
};

export default error;
