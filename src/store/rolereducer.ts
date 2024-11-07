import { createSlice } from "@reduxjs/toolkit";

interface RoleState {
  role: string;
}   

const initialState: RoleState = {
  role: "Unknown Personnel",
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
  


//rolereducer.ts
   

