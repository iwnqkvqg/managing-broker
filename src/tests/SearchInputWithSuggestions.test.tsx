import { describe, expect, it } from "vitest";
import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "@/tests/utils";
import SearchInputWithSuggestions from "@/components/SearchInputWithSuggestions";

describe("SearchInputWithSuggestions", () => {
  it("should render suggestions if text field is not empty", () => {
    renderWithProviders(<SearchInputWithSuggestions />);

    const textField = screen.getByRole("textbox");
    fireEvent.change(textField, { target: { value: "test" } });

    const suggestions = screen.getAllByRole("menu");
    expect(suggestions).toBeDefined();
  });
});
