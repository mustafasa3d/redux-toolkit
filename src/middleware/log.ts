// @ts-nocheck

const log = (state) => (next) => (action) => {
  console.log("----------------------------------");

  console.log("state", state);
  console.log("next", next);
  console.log("action", action);

  console.log("---------------------------------- ");
  //   return next(action);
  next(action);
};

export default log;
