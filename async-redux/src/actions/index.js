export const DO_SOME_SHIT = "DO_SOME_SHIT";

export const doSomeShit = () => {
  return {
    type: DO_SOME_SHIT,
    payload: "something",
  };
};
