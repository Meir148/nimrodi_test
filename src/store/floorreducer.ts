import { createSlice } from "@reduxjs/toolkit";

const initialState: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } = {
    floorAccess: [false, false, false, false, false],
};

const floorSlice = createSlice({
    name: "floorAccess",
    initialState,
    reducers: {
        changeAccess: (state, action) => {
            state.floorAccess = action.payload;
        },
    },
});

export const { changeAccess } = floorSlice.actions;

export default floorSlice.reducer;

//floorreducer.ts