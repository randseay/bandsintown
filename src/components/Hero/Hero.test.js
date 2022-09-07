import { render, screen } from "@testing-library/react";

import Hero from "./Hero";

const band = {
  id: "1322",
  name: "NEEDTOBREATHE",
  image_url: "https://photos.bandsintown.com/large/12629684.jpeg",
  tracker_count: 688196,
  upcoming_event_count: 6,
  url: "https://www.bandsintown.com/a/1322?came_from=267&app_id=bands_in_town",
};

test("renders band avatar", () => {
  render(<Hero band={band} />);

  const avatar = screen.getByAltText("band avatar");

  expect(avatar).toBeInTheDocument();
  expect(avatar).toHaveClass("hero--image");
  expect(avatar.src).toBe(band.image_url);
});

test("renders band name", () => {
  render(<Hero band={band} />);

  const name = screen.getByText(band.name);

  expect(name).toBeInTheDocument();
  expect(name).toHaveClass("hero--name");
});

test("renders band followers", () => {
  render(<Hero band={band} />);

  const followers = screen.getByText(
    `${band.tracker_count.toLocaleString("en-US")} Followers`
  );

  expect(followers).toBeInTheDocument();
  expect(followers).toHaveClass("hero--followers");
});

test("renders band shows", () => {
  render(<Hero band={band} />);

  const shows = screen.getByText(
    `${band.upcoming_event_count.toLocaleString("en-US")} Upcoming Shows`
  );

  expect(shows).toBeInTheDocument();
  expect(shows).toHaveClass("hero--shows");
});

test("renders band follow button", () => {
  render(<Hero band={band} />);

  const shows = screen.getByRole("link", { name: /follow/i });

  expect(shows).toBeInTheDocument();
  expect(shows.href).toBe(band.url);
});
