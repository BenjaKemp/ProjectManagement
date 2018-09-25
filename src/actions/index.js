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

export const editCombo = ({
   userId,
  roleId,
  projectId,
  index
}) => ({
  type: 'EDIT_COMBO',
  combo: {
  userId,
  roleId,
  projectId,
},
  index,
})

export const deleteCombo = (index) => ({
  type: 'DELETE_COMBO',
  index
})
