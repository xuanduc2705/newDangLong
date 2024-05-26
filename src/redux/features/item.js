import { checkJson } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
const itemJson = localStorage.getItem("item");
const itemLocal = checkJson(itemJson) || itemJson;
const initialState = Number(itemLocal?.building_id)
  ? itemLocal
  : {
      project_id: Number(itemLocal?.project_id) || undefined,
      name: Number(itemLocal?.project_name) || undefined,
      project_id_ad: Number(itemLocal?.project_name) || undefined,
      access_token: Number(itemLocal?.project_name) || undefined,
    };

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.project_id = action.payload.project_id;
      state.name = action.payload.name;
      state.project_id_ad = action.payload.project_id_ad;
      state.access_token = action.payload.access_token;
    },
    clearItem: (state) => {
      state.project_id = null;
      state.name = null;
      state.project_id_ad = null;
      state.access_token = null;
    },
  },
});

export const { setItem, clearItem } = itemSlice.actions;
export default itemSlice.reducer;
