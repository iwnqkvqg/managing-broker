import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/store";
import { Entity } from "@/components/EntityInfo";
import { entities } from "@/data/entities";

export interface managingBrokerState {
  isAddEntityDialogOpen: boolean;
  knownEntities: Entity[]; // TODO remove
  searchSuggestions: Entity[];
  currentEntity: Entity | null;
}

const initialState: managingBrokerState = {
  isAddEntityDialogOpen: false,
  knownEntities: entities, // TODO remove
  searchSuggestions: [],
  currentEntity: null,
};

export const managingBrokerSlice = createSlice({
  initialState,
  name: "managingBroker",
  reducers: {
    addEntity: (state, action: PayloadAction<Entity>) => {
      // TODO remove
      state.knownEntities = [...state.knownEntities, action.payload];
    },
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
  addEntity, // TODO remove
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
export const selectKnownEntities = (
  state: RootState, // TODO remove
) => state.managingBroker.knownEntities;
export const selectIsAddEntityDialogOpen = (state: RootState) =>
  state.managingBroker.isAddEntityDialogOpen;

export default managingBrokerSlice.reducer;
