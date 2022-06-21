import Moralis from 'moralis';
import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { routes, userConstants } from '../../constants';
import { userData } from '../actions';

export function* fetchUserData() {
    try {
        const data = yield call(userData);
        yield put({ type: userConstants.FETCH_USER_DATA_SUCCESS, payload: data });
    } catch (error) {
        console.log("error==>", error);
        yield put({ type: userConstants.FETCH_USER_DATA_FAILURE });
    }
}

export default function* watchTocreateprofileSaga() {
    yield takeEvery(userConstants.FETCH_USER_DATA_REQUEST, fetchUserData);

}

