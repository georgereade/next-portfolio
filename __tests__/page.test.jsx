import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Homepage from "../src/app/Homepage/page";

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

test("Homepage", () => {
  render(<Homepage />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "I'm George, a UK-based freelance web developer creating professional, modern and affordable websites.",
    })
  ).toBeDefined();
});
