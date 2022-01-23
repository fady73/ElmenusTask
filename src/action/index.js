import actionTypes from "./ActionTypes";

export const getAllMenus = () => ({
  type: actionTypes.GET_ALL_MENUS_REQUEST,
});

export const editCategory = (data) => ({
  type: actionTypes.GET_EDIT_CATEGORY_RECIVIED,
  data,
});

export const clearCategory = () => ({
  type: actionTypes.GET_EDIT_CATEGORY_REQUEST,
});

export const editItem = (data) => ({
  type: actionTypes.GET_EDIT_CATEGORY_ITEM_RECIVIED,
  data,
});

export const clearItem = () => ({
  type: actionTypes.GET_EDIT_CATEGORY_ITEM_REQUEST,
});
