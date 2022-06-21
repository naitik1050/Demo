import { takeEvery, put, call, delay, select } from 'redux-saga/effects';
import { userConstants } from '../../constants';
import { googleAuthenticatorFlag, googleAuthenticatorsecret, googleAuthenticatorQRcode, googleAuthenticatorverify } from '../actions';


export function* openModalRequest() {
    try {
        yield put({ type: userConstants.TWO_FACTOR_MODAL_OPEN_SUCCESS });
        yield put({ type: userConstants.GOOGLE_AUTHENTICATOR_QR_SERVICE_REQUEST });
    } catch (error) {
        console.log(error);
        yield put({ type: userConstants.TWO_FACTOR_MODAL_OPEN_FAILURE });
    }
}

export function* googleAuthFlag(action) {
    const { payload } = action;
    try {
        yield call(googleAuthenticatorFlag, payload);
    } catch (error) {
        console.log(error);
    }
}

export function* googleAuthenticator() {
    try {
        const secret_response = yield call(googleAuthenticatorsecret);
        if (secret_response.status == 200) {
            const secret = secret_response.data;
            const qr_code_response = yield call(googleAuthenticatorQRcode, secret);
            const qr_code = qr_code_response.data;
            const payload = { secret, qr_code }
            yield put({ type: userConstants.GOOGLE_AUTHENTICATOR_QR_SERVICE_SUCCESS, payload });
        }
    } catch (error) {
        console.log(error);
        yield put({ type: userConstants.GOOGLE_AUTHENTICATOR_QR_SERVICE_FAILURE });
    }
}

export function* googleAuthenticatorVerify(action) {
    const { otp } = action;
    try {
        const { twofactor: { secretCode } } = yield select();
        if (otp == '') {
            yield put({ type: userConstants.TOAST_SHOW_ERROR, text: "Enter the valid OTP." });
        } else {
            const newPayload = { otp: otp, secret: secretCode }
            const response = yield call(googleAuthenticatorverify, newPayload);
            if (response.data == 'True') {
                yield put({ type: userConstants.GOOGLE_AUTH_DEFAULT_FLAG, payload: true });
                yield put({ type: userConstants.TOAST_SHOW_SUCCESS, text: "2FA Verified." });
                yield put({ type: userConstants.GOOGLE_AUTHENTICATOR_VERIFY_SUCCESS });
                yield delay(1000)
                yield put({ type: userConstants.TWO_FACTOR_MODAL_CLOSE_REQUEST });
            } else {
                yield put({ type: userConstants.TOAST_SHOW_ERROR, text: "Invalid OTP." });
            }
        }
    } catch (error) {
        console.log(error);
        yield put({ type: userConstants.GOOGLE_AUTHENTICATOR_VERIFY_FAILURE });
    }
}

export default function* watchTwoFactorSaga() {
    yield takeEvery(userConstants.TWO_FACTOR_MODAL_OPEN_REQUEST, openModalRequest);
    yield takeEvery(userConstants.GOOGLE_AUTH_DEFAULT_FLAG, googleAuthFlag);
    yield takeEvery(userConstants.GOOGLE_AUTHENTICATOR_QR_SERVICE_REQUEST, googleAuthenticator);
    yield takeEvery(userConstants.GOOGLE_AUTHENTICATOR_VERIFY_REQUEST, googleAuthenticatorVerify);
}



