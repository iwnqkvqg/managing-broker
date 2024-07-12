import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { Entity } from "@/components/EntityInfo";

export interface managingBrokerState {
  entity: Entity | null;
  isModalOpen: boolean;
  suggestions: Entity[];
}

const initialState: managingBrokerState = {
  entity: null,
  isModalOpen: false,
  suggestions: [],
};

export const managingBrokerSlice = createSlice({
  name: "managingBroker",
  initialState,
  reducers: {
    setEntity: (state, action: PayloadAction<Entity>) => {
      state.entity = action.payload;
    },
    unsetEntity: (state) => {
      state.entity = null;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { setEntity, unsetEntity, openModal, closeModal } =
  managingBrokerSlice.actions;

export default managingBrokerSlice.reducer;
