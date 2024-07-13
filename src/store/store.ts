import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useDispatchOriginal,
  useSelector as useSelectorOriginal,
} from "react-redux";

import managingBrokerReducer from "@/store/managingBrokerSlice";

export const store = configureStore({
  reducer: {
    managingBroker: managingBrokerReducer,
  },
});

const rootReducer = combineReducers({
  managingBroker: managingBrokerReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;

export const useDispatch = useDispatchOriginal.withTypes<AppDispatch>();
export const useSelector = useSelectorOriginal.withTypes<RootState>();
