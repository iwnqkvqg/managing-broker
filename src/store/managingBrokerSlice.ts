import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { Entity, entities } from "@/data/entities";

export interface managingBrokerState {
  isAddEntityDialogOpen: boolean;
  knownEntities: Entity[];
  searchSuggestions: Entity[];
  selectedEntity: Entity | null;
}

const initialState: managingBrokerState = {
  isAddEntityDialogOpen: false,
  knownEntities: entities,
  searchSuggestions: entities,
  selectedEntity: null,
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
    setSelectedEntity: (state, action: PayloadAction<Entity>) => {
      state.selectedEntity = action.payload;
    },
    unsetSelectedEntity: (state) => {
      state.selectedEntity = null;
    },
    // setSearchSuggestions
    // unsetSearchSuggestions
  },
});

export const {
  addEntity,
  closeAddEntityDialog,
  openAddEntityDialog,
  setSelectedEntity,
  unsetSelectedEntity,
} = managingBrokerSlice.actions;

export default managingBrokerSlice.reducer;
