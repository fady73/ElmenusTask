import actionTypes from "../action/ActionTypes";

const initialState = {
  menusList: null,
  editCatagory:null,
  editCatagoryItem:null
};

export default function (state = initialState, action) {
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
      case actionTypes.GET_EDIT_CATEGORY_REQUEST:
        return {
          ...state,
          editCatagory:null,
        };
  
      case actionTypes.GET_EDIT_CATEGORY_RECIVIED:
        return {
          ...state,
          editCatagory:  action.data,
        };
        case actionTypes.GET_EDIT_CATEGORY_ITEM_REQUEST:
          return {
            ...state,
            editCatagoryItem:null,
          };
    
        case actionTypes.GET_EDIT_CATEGORY_ITEM_RECIVIED:
          return {
            ...state,
            editCatagoryItem:  action.data,
          };
    default:
      return state;
  }
}
