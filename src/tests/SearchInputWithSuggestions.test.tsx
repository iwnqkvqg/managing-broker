import { describe, expect, it } from "vitest";
import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "@/tests/utils";
import SearchInputWithSuggestions from "@/components/SearchInputWithSuggestions";
import { Country } from "@/data/country";

describe("SearchInputWithSuggestions", () => {
  it("should render suggestions if text field is not empty", async () => {
    renderWithProviders(<SearchInputWithSuggestions />, {
      preloadedState: {
        managingBroker: {
          searchSuggestions: [
            {
              name: "test name",
              address: "test address",
              city: "test city",
              country: Country.UnitedStates,
            },
          ],
          isAddEntityDialogOpen: false,
          currentEntity: null,
          knownEntities: [],
        },
      },
    });

    const textField = screen.getByRole("textbox");
    fireEvent.change(textField, { target: { value: "r" } });

    const suggestions = await screen.findAllByRole("menu");
    expect(suggestions).toBeDefined();
  });
});
