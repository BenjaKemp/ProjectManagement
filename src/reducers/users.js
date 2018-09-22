const usersReducerDefaultState = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

export default (state = usersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
  return [...state, action.newUser]
    default:
      return state;
  }
};
