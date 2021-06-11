import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component tests", () => {
  test("Renders hello world", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...In this case, we don't need to simulate anything like a button click.

    //Assert
    const isFound = screen.getByText("Hello world", { exact: false });
    expect(isFound).toBeInTheDocument();
  });

  test("Renders It's good to see you", () => {
    render(<Greeting />);
    const isFound = screen.getByText("It's good to see you", { exact: false });
    expect(isFound).toBeInTheDocument();
  });
});
