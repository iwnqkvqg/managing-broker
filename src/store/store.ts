import { configureStore } from "@reduxjs/toolkit";
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useDispatch = useDispatchOriginal.withTypes<AppDispatch>();
export const useSelector = useSelectorOriginal.withTypes<RootState>();
