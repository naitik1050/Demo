import { userConstants } from "../../constants/index";

const initialState = {
    lightmode: false,
};

export const change_mode = (state = initialState, action) => {

    switch (action.type) {
        case userConstants.APPLY_MODE_SUCCESS:
            if (action.payload) {
                document.getElementById('theme-opt').href = './css/style.min.css'
            } else {
                document.getElementById('theme-opt').href = './css/style-dark.min.css'
            }
            return { ...state, lightmode: action.payload };
        case userConstants.CLEAR_ALL_DATA:
            return initialState

        default:
            return state;
    }
};
