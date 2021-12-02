import { createStore } from "redux";
import reducers from ".";

export const store = createStore(
    reducers,
    {}
)

export type RootState = ReturnType<typeof store.getState>
