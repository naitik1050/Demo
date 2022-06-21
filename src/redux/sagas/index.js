import { all } from 'redux-saga/effects';
import watchToauthSaga from './auth.saga';
import watchTocreateprofileSaga from './create-profile.saga';
import watchTouserdataSaga from './user-data.action';

export default function* sagas() {
    yield all([watchToauthSaga(), watchTocreateprofileSaga(), watchTouserdataSaga()]);
}
