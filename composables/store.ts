export const useStore = <T extends unknown>() => {
  const state = useState<{ name: string; age: number; emails: Array<T | any> }>(
    "store",
    () => ({
      name: "ahmed",
      age: 30,
      emails: []
    })
  );
  const actions = {
    setEmails: (item: T) => {
      state.value.emails = [...state.value.emails, item];
    }
  };

  return { state, actions };
};
