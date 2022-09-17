import {UserInfo} from "../models";
import userSlice from "./state/user";
import {configureStore} from "@reduxjs/toolkit";
export interface AppStore{
    user: UserInfo;
}
export default configureStore<AppStore>({
    reducer: {
        user: userSlice
    }
});