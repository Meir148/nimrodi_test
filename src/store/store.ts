import { configureStore } from "@reduxjs/toolkit";
import floorSlice from "./floorreducer";
import roleSlice from "./rolereducer";


const store = configureStore({
    reducer: {
        floorAccess: floorSlice,
        role: roleSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store

//store.ts