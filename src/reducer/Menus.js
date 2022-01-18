import actionTypes from "../action/ActionTypes";

const initialState = {
  menusList: null,
};

export default function (state = initialState, action) {
  console.log(action.payload)

  switch (action.type) {
    case actionTypes.GET_ALL_MENUS_RECIVIED:
      return {
        ...state,
        menusList: action.payload,
      };

    case actionTypes.GET_ALL_MENUS_REQUEST:
      return {
        ...state,
        menusList: null,
      };

    default:
      return state;
  }
}
