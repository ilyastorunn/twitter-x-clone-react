import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'ilyastorunn',
        fullName: 'İlyas Torun',
        avatar: 'https://pbs.twimg.com/profile_images/1660417580954165252/jWfk38BU_400x400.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'ilyastorunn',
            fullName: 'İlyas Torun',
            avatar: 'https://pbs.twimg.com/profile_images/1660417580954165252/jWfk38BU_400x400.jpg'
        },
        {
            id: 2,
            username: 'reactdev',
            fullName: 'React Developer',
            avatar: 'https://reactshowcase.com/logo.png'
        }
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // state manipulation methods
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer