import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
    },
  },
});

export const selectFilters = (state) => state.filter.name;

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
