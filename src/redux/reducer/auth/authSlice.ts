import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from './types';

const initialState: AuthState = {
  userInfo: null,
  poll: [],
};


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setFormvalues: (state, action) => {
      state.userInfo = action.payload;
    },
    setPolling: (state, action) => {
      var data = [...state.poll];
      data.push(action.payload);
      state.poll = data;
    },
  },
});

export const {setFormvalues, setPolling} = authSlice.actions;
export default authSlice.reducer;
