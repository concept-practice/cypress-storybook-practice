import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  it("renders", () => {
    render(<App />);

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
