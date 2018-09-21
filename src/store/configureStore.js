import { createStore, combineReducers } from 'redux';
import usersReducer from '../reducers/users';
import rolesReducer from '../reducers/roles';
import projectsReducer from '../reducers/projects';
import combinationsReducer from '../reducers/combinations';



  const store = createStore(
    combineReducers({
      users: usersReducer,
      roles: rolesReducer,
      combinations: combinationsReducer,
      projects: projectsReducer
    })
  );

  export default store;
