import { createStore } from "redux";
import reducers from ".";

export const store = createStore(
    reducers,
    {}
)