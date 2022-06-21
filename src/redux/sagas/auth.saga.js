import Moralis from 'moralis';
import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { routes, userConstants } from '../../constants';
import { signUp, logIn, forgot, SignOut, walletAddress } from '../actions';
import { toast } from "react-toastify";
import { history } from '../../helper';
import { purgeStoredState } from 'redux-persist';
import { persistConfig } from '../store';

export function* loginSaga(action) {
    const { payload } = action;
    try {
        const data = yield call(logIn, payload);
        yield put({ type: userConstants.TOAST_SHOW_SUCCESS, text: "Sign in succesfull." });
        yield put({ type: userConstants.SIGNIN_SUCCESS, payload: data });
        history.replace('/')
    } catch (error) {
        if (error.code === 101) {
            yield put({ type: userConstants.TOAST_SHOW_ERROR, text: "Invalid email/password." });
        } else {
            yield put({ type: userConstants.TOAST_SHOW_ERROR, text: "email/password is required." });
        }
        yield put({ type: userConstants.SIGNIN_FAILURE });
    }
}

export function* signupSaga(action) {
    const { payload } = action;
    try {
        yield delay(1000)
        const data = yield call(signUp, payload);
        yield put({ type: userConstants.TOAST_SHOW_SUCCESS, text: 'Sign up succesfull.' });
        yield put({ type: userConstants.SIGNUP_SUCCESS, payload: data });
        history.replace('/login')
    } catch (error) {
        console.log("error==>", error);
        if (error.code === 202 || error.code === 203) {
            yield put({ type: userConstants.TOAST_SHOW_ERROR, text: error.message });
        } else {
            yield put({ type: userConstants.TOAST_SHOW_ERROR, text: "The field is required." });
        }
        yield put({ type: userConstants.SIGNUP_FAILURE });
    }
}

export function* forgotSaga(action) {
    const { payload } = action;
    try {
        const data = yield call(forgot, payload);
        toast.info('We have sent you an email, Please check.');
        yield put({ type: userConstants.FORGOT_PASSWORD_SUCCESS });
    } catch (error) {
        console.log("Error ==>", error);
        toast.error('Something went wrong with forgot password.');
        yield put({ type: userConstants.FORGOT_PASSWORD_FAILURE });
    }
}

export function* signOutSaga() {
    try {
        purgeStoredState(persistConfig)
        yield put({ type: userConstants.SIGNOUT_SUCCESS });
        yield put({ type: userConstants.CLEAR_ALL_DATA });
        window.location.href = '';
    } catch (error) {
        yield put({ type: userConstants.SIGNOUT_FAILURE });
    }
}


export function* storeWalletAddress(action) {
    const { payload } = action;
    try {
        yield call(walletAddress, payload);
        yield put({ type: userConstants.STORE_WALLET_ADDRESS_SUCCESS });
    } catch (error) {
        console.log("Error ==>", error);
        yield put({
            type: userConstants.STORE_WALLET_ADDRESS_FAILURE
        });
    }
}

export default function* watchToauthSaga() {
    yield takeEvery(userConstants.SIGNIN_REQUEST, loginSaga);
    yield takeEvery(userConstants.SIGNUP_REQUEST, signupSaga);
    yield takeEvery(userConstants.FORGOT_PASSWORD_REQUEST, forgotSaga);
    yield takeEvery(userConstants.SIGNOUT_REQUEST, signOutSaga);
    yield takeEvery(userConstants.STORE_WALLET_ADDRESS_REQUEST, storeWalletAddress);
}



