import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/store";
import { Entity } from "@/components/EntityInfo";

export interface managingBrokerState {
  isAddEntityDialogOpen: boolean;
  searchSuggestions: Entity[];
  currentEntity: Entity | null;
}

const initialState: managingBrokerState = {
  isAddEntityDialogOpen: false,
  searchSuggestions: [],
  currentEntity: null,
};

export const managingBrokerSlice = createSlice({
  initialState,
  name: "managingBroker",
  reducers: {
    closeAddEntityDialog: (state) => {
      state.isAddEntityDialogOpen = false;
    },
    openAddEntityDialog: (state) => {
      state.isAddEntityDialogOpen = true;
    },
    setCurrentEntity: (state, action: PayloadAction<Entity>) => {
      state.currentEntity = action.payload;
    },
    unsetCurrentEntity: (state) => {
      state.currentEntity = null;
    },
    setSearchSuggestions: (state, action: PayloadAction<Entity[]>) => {
      state.searchSuggestions = action.payload;
    },
    unsetSearchSuggestions: (state) => {
      state.searchSuggestions = [];
    },
  },
});

export const {
  closeAddEntityDialog,
  openAddEntityDialog,
  setCurrentEntity,
  unsetCurrentEntity,
  setSearchSuggestions,
  unsetSearchSuggestions,
} = managingBrokerSlice.actions;

export const selectSearchSuggestions = (state: RootState) =>
  state.managingBroker.searchSuggestions;
export const selectCurrentEntity = (state: RootState) =>
  state.managingBroker.currentEntity;
export const selectIsAddEntityDialogOpen = (state: RootState) =>
  state.managingBroker.isAddEntityDialogOpen;

export default managingBrokerSlice.reducer;
