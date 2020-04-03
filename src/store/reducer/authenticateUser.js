import credentials from '../../json/credentials.json';

const initialState = {
  validUser: null
};
const authenticateUser = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      const isValidUser = credentials.userName === action.userName && credentials.password === action.password
      return Object.assign({}, state, {
        validUser: isValidUser
      });

    default:
      return state;
  }
};

export default authenticateUser;