import Moralis from 'moralis';
import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { routes, userConstants } from '../../constants';
import { ProfileImage } from '../actions';

export function* changeProfileImage(action) {
    const { payload } = action;
    try {
        yield call(ProfileImage, payload);
        yield put({ type: userConstants.TOAST_SHOW_SUCCESS, text: "Image uploaded" });
        yield put({ type: userConstants.CHANGE_PROFILE_IMAGE_SUCCESS, payload: payload });
        yield put({ type: userConstants.FETCH_USER_DATA_REQUEST });
    } catch (error) {
        console.log("error==>", error);
        yield put({ type: userConstants.TOAST_SHOW_ERROR, text: "Image could not be uploaded." });
        yield put({ type: userConstants.CHANGE_PROFILE_IMAGE_FAILURE });
    }
}

export default function* watchTocreateprofileSaga() {
    yield takeEvery(userConstants.CHANGE_PROFILE_IMAGE_REQUEST, changeProfileImage);

}

