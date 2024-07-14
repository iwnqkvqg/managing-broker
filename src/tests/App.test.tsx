import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import App from "@/App";
import { renderWithProviders } from "@/tests/utils";

describe("App", () => {
  it("should render", () => {
    renderWithProviders(<App />);

    expect(screen.getByRole("main")).toBeDefined();
  });
});
