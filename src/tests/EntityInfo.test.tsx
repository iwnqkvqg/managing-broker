import { describe, expect, it } from "vitest";
import { fireEvent, screen } from "@testing-library/react";

import EntityInfo from "@/components/EntityInfo";
import { Country } from "@/data/country";
import { renderWithProviders } from "@/tests/utils";

describe("EntityInfo", () => {
  it("should unset the current entity on `Clear` button click", () => {
    const { store } = renderWithProviders(<EntityInfo />, {
      preloadedState: {
        managingBroker: {
          currentEntity: {
            address: "Entity Address",
            city: "Entity City",
            country: Country.UnitedStates,
            name: "Entity Name",
          },
          isAddEntityDialogOpen: false,
          searchSuggestions: [],
        },
      },
    });

    fireEvent.click(screen.getByRole("button"));

    const { managingBroker } = store.getState();
    expect(managingBroker.currentEntity).toBeNull();
  });
});
