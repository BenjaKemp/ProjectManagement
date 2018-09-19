import { createStore, combineReducers } from 'redux';
import usersReducer from '../reducers/users';
import rolesReducer from '../reducers/roles';
import projectsReducer from '../reducers/projects';

export default () => {
  const store = createStore(
    combineReducers({
      users: usersReducer,
      roles: rolesReducer,
      projects: projectsReducer
    })
  );

  return store;
};
