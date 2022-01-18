import actionTypes from "./ActionTypes";

export const getAllMenus = (data) => ({
  type: actionTypes.GET_ALL_MENUS_REQUEST,
  data,
});
