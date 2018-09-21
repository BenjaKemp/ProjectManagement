export const addCombo = (
  {
    userId,
    roleId,
    projectId
    }
) => ({
  type: 'ADD_COMBO',
  combo: {
    userId,
    roleId,
    projectId
  }
});

export const addUser = ({id, user}) =>({
  type: 'ADD_USER',
  newUser: {id,
  user
  }
})
