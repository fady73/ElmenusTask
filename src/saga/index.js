import { all, fork } from "redux-saga/effects";
import menusWatcher from "./menusSaga";

export default function* rootSaga() {
  yield all([fork(menusWatcher)]);
}
