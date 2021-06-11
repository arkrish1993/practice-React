import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async wrapper", () => {
  test("Renders posts if request succeeds", async () => {
    render(<Async />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
