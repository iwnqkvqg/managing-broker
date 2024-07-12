import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import InputAdornmentClear from "@/components/InputAdornmentClear";

describe("InputAdornmentClear", () => {
  const onClickMock = vi.fn();

  afterEach(() => {
    cleanup();
  });

  it("should render", () => {
    render(<InputAdornmentClear onClick={onClickMock} />);

    const button = screen.getByRole("button");

    expect(button).toBeDefined();
  });

  it("should call the `onClick` callback", () => {
    render(<InputAdornmentClear onClick={onClickMock} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledOnce();
  });
});
