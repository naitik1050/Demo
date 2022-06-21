import { userConstants } from "../../constants/index";

const initialState = {
    loader: false,
};

export const create_profile = (state = initialState, action) => {

    switch (action.type) {
        case userConstants.CHANGE_PROFILE_IMAGE_REQUEST:
            return { ...state, loader: true };
        case userConstants.CHANGE_PROFILE_IMAGE_SUCCESS:
            return { ...state, loader: false, };
        case userConstants.CHANGE_PROFILE_IMAGE_FAILURE:
            return { ...state, loader: false };

        case userConstants.CLEAR_ALL_DATA:
            return initialState

        default:
            return state;
    }
};
