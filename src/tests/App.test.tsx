import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@/tests/utils";
import App from "@/App";

describe("app", () => {
  it("should render", () => {
    renderWithProviders(<App />);

    expect(screen.getByRole("main")).toBeDefined();
  });
});
