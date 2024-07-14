import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";

import SearchSuggestions from "@/components/SearchSuggestions";
import { Country } from "@/data/country";
import { renderWithProviders } from "@/tests/utils";

describe("SearchSuggestions", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render suggestions", () => {
    renderWithProviders(<SearchSuggestions menuWidth={100} />, {
      preloadedState: {
        managingBroker: {
          currentEntity: null,
          isAddEntityDialogOpen: false,
          searchSuggestions: [
            {
              address: "Entity 1 Address",
              city: "Entity 1 City",
              country: Country.UnitedStates,
              name: "Entity 1",
            },
            {
              address: "Entity 2 Address",
              city: "Entity 2 City",
              country: Country.UnitedStates,
              name: "Entity 2",
            },
          ],
        },
      },
    });

    const suggestions = screen.getAllByRole("menuitem");
    expect(suggestions).toHaveLength(2);
  });

  it.skip("should set a suggestion as the current entity on click", () => {
    const selectedEntity = {
      address: "Entity 1 Address",
      city: "Entity 1 City",
      country: Country.UnitedStates,
      name: "Entity 1",
    };
    const { store } = renderWithProviders(
      <SearchSuggestions menuWidth={100} />,
      {
        preloadedState: {
          managingBroker: {
            currentEntity: null,
            isAddEntityDialogOpen: false,
            searchSuggestions: [
              selectedEntity,
              {
                address: "Entity 2 Address",
                city: "Entity 2 City",
                country: Country.UnitedStates,
                name: "Entity 2",
              },
            ],
          },
        },
      },
    );

    const suggestions = screen.getAllByRole("menuitem");
    fireEvent.click(suggestions[0]);

    const { managingBroker } = store.getState();
    expect(managingBroker.currentEntity).toEqual(selectedEntity);
  });

  it("should render the `Add manually` button", () => {
    renderWithProviders(<SearchSuggestions menuWidth={100} />);

    const addManually = screen.getByRole("button");

    expect(addManually).toBeDefined();
    expect(addManually.textContent).toBe("Add manually");
  });

  it("should open the adialog on `Add manually` button click", () => {
    const { store } = renderWithProviders(
      <SearchSuggestions menuWidth={100} />,
    );

    const addManually = screen.getByRole("button");
    fireEvent.click(addManually);

    const { managingBroker } = store.getState();
    expect(managingBroker.isAddEntityDialogOpen).toBe(true);
  });
});
