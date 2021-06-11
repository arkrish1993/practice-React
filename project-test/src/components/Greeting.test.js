import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component tests", () => {
  test("Renders 'Hello world'", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...In this case, we don't need to simulate anything like a button click.

    //Assert
    const isFound = screen.getByText("Hello world", { exact: false });
    expect(isFound).toBeInTheDocument();
  });

  test("Renders 'Howdy mate!' if button was clicked", () => {
    render(<Greeting />);
    userEvent.click(screen.getByRole("button"));
    const isFound = screen.getByText("Howdy mate", { exact: false });
    expect(isFound).toBeInTheDocument();
  });

  test("Renders 'Yassss queen!' if button was not clicked", () => {
    render(<Greeting />);
    const isFound = screen.getByText("Yassss queen", { exact: false });
    expect(isFound).toBeInTheDocument();
  });

  test("Does not render 'Yassss queen!' after button was clicked", () => {
    render(<Greeting />);
    userEvent.click(screen.getByRole("button"));
    const isFound = screen.queryByText("Yassss queen", { exact: false });
    expect(isFound).toBeNull();
  });
});
