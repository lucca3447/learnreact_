import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt test renders on Pizza image", async () => {
  const name = "I should be a pizza, but it's Kurisu";
  const src =
    "https://i.pinimg.com/1200x/97/a8/14/97a81445e810015073e9ad30fa903042.jpg";
  const screen = render(
    <Pizza name={name} description="Cool Kurisu" image={src} />,
  );
  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const screen = render(
    <Pizza name={"Cool Pizza"} description="super cool pizza" />
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
