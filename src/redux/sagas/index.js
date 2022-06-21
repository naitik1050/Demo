import { all } from 'redux-saga/effects';
import watchToauthSaga from './auth.saga';
import watchTocreateprofileSaga from './create-profile.saga';
import watchTouserdataSaga from './user-data.action';
import watchTwoFactorSaga from './twoFactor.saga';

export default function* sagas() {
    yield all([watchToauthSaga(), watchTocreateprofileSaga(), watchTouserdataSaga(), watchTwoFactorSaga()]);
}
