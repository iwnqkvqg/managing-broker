import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/store/store";
import { Entity, entities } from "@/data/entities";

export interface managingBrokerState {
  isAddEntityDialogOpen: boolean;
  knownEntities: Entity[];
  searchSuggestions: Entity[];
  currentEntity: Entity | null;
}

const initialState: managingBrokerState = {
  isAddEntityDialogOpen: false,
  knownEntities: entities,
  searchSuggestions: entities,
  currentEntity: null,
};

export const managingBrokerSlice = createSlice({
  initialState,
  name: "managingBroker",
  reducers: {
    addEntity: (state, action: PayloadAction<Entity>) => {
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
    // setSearchSuggestions
    // unsetSearchSuggestions
  },
});

export const {
  addEntity,
  closeAddEntityDialog,
  openAddEntityDialog,
  setCurrentEntity,
  unsetCurrentEntity,
} = managingBrokerSlice.actions;

export const selectSearchSuggestions = (state: RootState) =>
  state.managingBroker.searchSuggestions;
export const selectCurrentEntity = (state: RootState) =>
  state.managingBroker.currentEntity;
export const selectKnownEntities = (state: RootState) =>
  state.managingBroker.knownEntities;
export const selectIsAddEntityDialogOpen = (state: RootState) =>
  state.managingBroker.isAddEntityDialogOpen;

export default managingBrokerSlice.reducer;
