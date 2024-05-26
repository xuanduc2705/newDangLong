import { createSlice } from "@reduxjs/toolkit";

const buildingSlice = createSlice({
  name: "buildings",
  initialState: [],
  reducers: {
    setBuildings: (state, action) => {
      return action.payload;
    },
    addBuilding: (state, action) => {
      return [...state, action.payload];
    },
    removeBuilding: (state, action) => {
      return state.filter((a) => a.id !== action.payload);
    },
  },
});

export const { setBuildings, addBuilding, removeBuilding } =
  buildingSlice.actions;
export default buildingSlice.reducer;
