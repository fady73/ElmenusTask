import actionTypes from "../action/ActionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  menusList: null,
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

      case actionTypes.ADD_NEW_CATEGORY:
      state.menusList.push({...action.data,id:uuidv4(),items:[]});
        return {
          ...state,
        };
    default:
      return state;
  }
}
