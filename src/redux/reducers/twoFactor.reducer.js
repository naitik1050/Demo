import { userConstants } from "../../constants/index";

const initialState = {
    modal: false,
    loader: false,
    isLogin: false,
    qrCode: '',
    secretCode: ''
};

export const twofactor = (state = initialState, action) => {
    switch (action.type) {

        case userConstants.TWO_FACTOR_MODAL_OPEN_REQUEST:
            return { ...state, modal: false };
        case userConstants.TWO_FACTOR_MODAL_OPEN_SUCCESS:
            return { ...state, modal: true };
        case userConstants.TWO_FACTOR_MODAL_OPEN_FAILURE:
            return { ...state, modal: false };

        case userConstants.TWO_FACTOR_MODAL_CLOSE_REQUEST:
            return { ...state, modal: false };

        case userConstants.GOOGLE_AUTHENTICATOR_QR_SERVICE_REQUEST:
            return { ...state, loader: false };
        case userConstants.GOOGLE_AUTHENTICATOR_QR_SERVICE_SUCCESS:
            const { payload: { qr_code, secret } } = action;
            console.log("payload==>", qr_code, secret);
            return { ...state, loader: false, qrCode: qr_code, secretCode: secret };
        case userConstants.GOOGLE_AUTHENTICATOR_QR_SERVICE_FAILURE:
            return { ...state, loader: false }

        case userConstants.CLEAR_ALL_DATA:
            return initialState

        default:
            return state;
    }
};
