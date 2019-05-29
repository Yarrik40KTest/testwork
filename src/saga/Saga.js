import {requestTestError,select} from "../Action/action"
import { takeEvery, call, put } from "redux-saga/effects";

export function* watcherSaga() {

    yield takeEvery("API_CALL_REQUEST", fetchTest);
}
function handleFetch() {
     return fetch(`http://localhost:3000/testJson.json`)
        .then(response => response.json())
}

function* fetchTest() {
    try {
        const data = yield call(handleFetch);
        yield put(select(data.message.tasks));
    } catch (error) {
        yield put(requestTestError());
    }
}