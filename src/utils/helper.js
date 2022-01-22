
export const isAuthorized = (userRoles = '', accessRoles) => {
    return accessRoles.includes(userRoles);
  };