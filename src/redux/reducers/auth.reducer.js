import { userConstants } from "../../constants/index";

const initialState = {
    loader: false,
    isLogin: false,
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.SIGNIN_REQUEST:
            return { ...state, loader: true };
        case userConstants.SIGNUP_REQUEST:
            return { ...state, loader: true };
        case userConstants.FORGOT_PASSWORD_REQUEST:
            return { ...state, loader: true };
        case userConstants.SIGNOUT_REQUEST:
            return { ...state, loader: true };

        case userConstants.SIGNIN_SUCCESS:
            return { ...state, loader: false, isLogin: true };
        case userConstants.SIGNUP_SUCCESS:
            return { ...state, loader: false };
        case userConstants.FORGOT_PASSWORD_SUCCESS:
            return { ...state, loader: false };
        case userConstants.SIGNOUT_SUCCESS:
            return { ...state, loader: false, isLogin: false };

        case userConstants.SIGNIN_FAILURE:
            return { ...state, loader: false };
        case userConstants.SIGNUP_FAILURE:
            return { ...state, loader: false };
        case userConstants.FORGOT_PASSWORD_FAILURE:
            return { ...state, loader: false };
        case userConstants.SIGNOUT_FAILURE:
            return { ...state, loader: false };

        case userConstants.CLEAR_ALL_DATA:
            return initialState

        default:
            return state;
    }
};
