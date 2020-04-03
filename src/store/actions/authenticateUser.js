export const authenticateUser= (userName,password) =>({
    type: 'AUTHENTICATE_USER',
    userName,
    password
});