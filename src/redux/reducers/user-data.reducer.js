import { userConstants } from "../../constants/index";

const initialState = {
    user_data: [],
    profile_image: 'https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png',
    loader: false,
};

export const user_data = (state = initialState, action) => {

    switch (action.type) {
        case userConstants.FETCH_USER_DATA_REQUEST:
            return { ...state, loader: true };
        case userConstants.FETCH_USER_DATA_SUCCESS:
            const { profileImage } = action.payload?.attributes;
            const profile_image = profileImage == undefined ? 'https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png' : profileImage?._url
            return { ...state, loader: false, user_data: action.payload?.attributes, profile_image: profile_image };
        case userConstants.FETCH_USER_DATA_FAILURE:
            return { ...state, loader: false };

        case userConstants.CLEAR_ALL_DATA:
            return initialState

        default:
            return state;
    }
};
