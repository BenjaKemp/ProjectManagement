const rolesReducerDefaultState = [
  { id: 1, name: "Admin" },
  { id: 2, name: "Editor" },
  { id: 3, name: "Viewer" }
];

export default (state = rolesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
