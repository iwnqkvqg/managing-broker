import { afterEach, describe, expect, it } from "vitest";
import { cleanup, screen } from "@testing-library/react";

import ManagingBroker from "@/components/ManagingBroker";
import { renderWithProviders } from "@/tests/utils";
import { Country } from "@/data/country";

describe("ManagingBroker", () => {
  afterEach(() => {
    cleanup();
  });

  it("should display the entity info if current entity is set", () => {
    renderWithProviders(<ManagingBroker />, {
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

    const entityInfo = screen.getByTestId("entity-info");
    expect(entityInfo).toBeDefined();
  });

  it("should display the search input with suggestions if current entity is not set", () => {
    renderWithProviders(<ManagingBroker />);

    const searchInputWithSuggestions = screen.getByTestId(
      "search-input-with-suggestions",
    );
    expect(searchInputWithSuggestions).toBeDefined();
  });
});
