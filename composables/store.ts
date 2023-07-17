export const useStore = () => {
  return useState("store", () => ({ name: "ahmed", age: 30 }));
};
