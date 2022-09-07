import { render, screen } from "@testing-library/react";

import Button from "./Button";

test("renders button", () => {
  render(<Button>Test Button</Button>);

  const button = screen.getByRole("button", { name: /test button/i });

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("button");
});
