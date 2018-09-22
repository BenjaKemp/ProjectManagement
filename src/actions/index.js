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

export const addUser = ({id, name}) =>({
  type: 'ADD_USER',
  newUser: {id,
  name
  }
})
