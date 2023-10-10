import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentAccount: {
    id: 1,
    username: 'esgitursan',
    fullName: 'Esgi Tursan',
    avatar: 'https://pbs.twimg.com/profile_images/1200814302820753410/AhAh3xlU_400x400.png'
  },
  accounts: []
}

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload)
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(account => account.id != account.payload)
      if (state.currentAccount && action.payload == state.currentAccount.id) {
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