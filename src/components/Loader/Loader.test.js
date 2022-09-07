import { render, screen } from "@testing-library/react";

import Loader from "./Loader";

test("renders loader", () => {
  render(<Loader />);

  const loader = screen.getByTestId("loader");

  expect(loader).toBeInTheDocument();
  expect(loader).toHaveClass("lds-facebook");
});
