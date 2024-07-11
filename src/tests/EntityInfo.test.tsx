import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { Country } from "@/data/country";
import EntityInfo from "@/components/EntityInfo";

describe("EntityInfo", () => {
    const onClearkMock = vi.fn();
    const entity = {
        address: "123 Main Street",
        city: "New York",
        country: Country.UnitedStates,
        name: "John Doe",
    };

    afterEach(() => {
        cleanup();
    });

    it("should render", () => {
        render(<EntityInfo entity={entity} onClear={onClearkMock} />);
        
        const button = screen.getByRole("button");
        
        expect(button).toBeDefined();
    });

    // should call the `onClear` callback-?
    // should render the entity name
    // should render the entity address
    // should render the entity country
});