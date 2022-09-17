import {UserInfo} from "../../models";
import {createSlice} from "@reduxjs/toolkit";
import {ClearLocalStorage, PersistLocalStorage} from "../../utilities/localStorage.utility";

export const EmptyUser: UserInfo = {
    id: 0,
    name: '',
    email: ''
}

export const UserKey = 'user';

export const  userSlice  =  createSlice ({
    name:  'user' ,
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user' as string) || '') : EmptyUser,
    reducers: {
        createUser: (state, action) => {
            PersistLocalStorage<UserInfo>(UserKey,action.payload)
            return action.payload
        },
        updateUser: (state, action) => {
            const result = {...state, ...action.payload}
            PersistLocalStorage<UserInfo>(UserKey,result)
            return result
        },
        resetUser: (state) => {
            ClearLocalStorage(UserKey)
            return EmptyUser;
        }
    }
});
export const {createUser, updateUser, resetUser} = userSlice.actions;
export default userSlice.reducer;
