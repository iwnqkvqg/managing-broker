import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";

import AddEntityDialog from "@/components/AddEntityDialog";
import { Country } from "@/data/country";
import { renderWithProviders } from "@/tests/utils";

describe.only("AddEntityDialog", () => {
  afterEach(() => {
    cleanup();
  });

  it("should set current entity on form submit", () => {
    const newEntity = {
      name: "test name",
      address: "test address",
      city: "test city",
      country: Country.UnitedStates,
    };
    const { store } = renderWithProviders(<AddEntityDialog />, {
      preloadedState: {
        managingBroker: {
          currentEntity: null,
          isAddEntityDialogOpen: true,
          knownEntities: [],
          searchSuggestions: [],
        },
      },
    });

    const legalNameInput = screen.getByLabelText(/legal name/i);
    fireEvent.change(legalNameInput, {
      target: { value: newEntity.name },
    });
    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: newEntity.address },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: newEntity.city },
    });
    fireEvent.change(screen.getByLabelText(/country/i), {
      target: { value: newEntity.country },
    });
    fireEvent.click(screen.getByText("Save"));

    const { managingBroker } = store.getState();
    expect(managingBroker.currentEntity).toEqual(newEntity);
    expect(managingBroker.isAddEntityDialogOpen).toBe(false);
  });

  it("should not allow submitting incomplete form", () => {
    const { store } = renderWithProviders(<AddEntityDialog />, {
      preloadedState: {
        managingBroker: {
          currentEntity: null,
          isAddEntityDialogOpen: true,
          knownEntities: [],
          searchSuggestions: [],
        },
      },
    });

    const legalNameInput = screen.getByLabelText(/legal name/i);
    fireEvent.change(legalNameInput, {
      target: { value: "test name" },
    });
    fireEvent.click(screen.getByText("Save"));

    const { managingBroker } = store.getState();
    expect(managingBroker.currentEntity).toBeNull();
    expect(managingBroker.isAddEntityDialogOpen).toBe(true);
    expect(screen.getByRole("dialog")).toBeDefined();
  });

  it("should close the dialog on cancel", () => {
    const { store } = renderWithProviders(<AddEntityDialog />, {
      preloadedState: {
        managingBroker: {
          currentEntity: null,
          isAddEntityDialogOpen: true,
          knownEntities: [],
          searchSuggestions: [],
        },
      },
    });

    fireEvent.click(screen.getByText(/cancel/i));

    const { managingBroker } = store.getState();
    expect(managingBroker.isAddEntityDialogOpen).toBe(false);
  });
});
