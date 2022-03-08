import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import reducers from ".";

export const store = createStore(
    reducers,
    composeWithDevTools(),
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch