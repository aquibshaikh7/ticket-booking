import { configureStore, createSlice } from "@reduxjs/toolkit";

let initialState = { seatdata: "" };
let slice = createSlice({
  name: "seatdata",
  initialState: initialState,
  reducers: {
    seat(state, action) {
      state.seatdata = action.payload;
    },
  },
});

export let action = slice.actions;

let store = configureStore({
  reducer: { ui: slice.reducer },
});

export default store;
