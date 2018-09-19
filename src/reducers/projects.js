// Expenses Reducer

const projectsReducerDefaultState = [
  { id: 1, name: "Trip to space" },
  { id: 2, name: "Assembly Ikea furniture" },
  { id: 3, name: "Datumize Zentral" }
];

export default (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
