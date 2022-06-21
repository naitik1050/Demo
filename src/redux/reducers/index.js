import { combineReducers } from 'redux';
import { auth } from "./auth.reducer";
import { toastBar } from "./toast.reducer";
import { create_profile } from "./create-profile.reducer";
import { user_data } from "./user-data.reducer";
import { change_mode } from './mode.reducer';

const rootReducer = combineReducers({
    auth, user_data, toastBar, create_profile, change_mode
});

export default rootReducer;