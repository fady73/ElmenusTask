import { put, takeLatest } from "redux-saga/effects";
import actionTypes from "../action/ActionTypes";
import * as Menus from "../action/Menus";
import notify from "../component/toaster/index";

function* fetchAllMenus() {
  try {
    const res = yield Menus.getAllMenusData();
    yield put({
      type: actionTypes.GET_ALL_MENUS_RECIVIED,
      payload: res.categories,
    });
  } catch (err) {
    notify(err.message);
  }
}

export default function* menusWatcher() {
  yield takeLatest(actionTypes.GET_ALL_MENUS_REQUEST, fetchAllMenus);
}
