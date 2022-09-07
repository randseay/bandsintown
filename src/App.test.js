import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders search button", () => {
  render(<App />);
  const searchButton = screen.getByRole("button", { name: /search/i });
  expect(searchButton).toBeInTheDocument();
});
