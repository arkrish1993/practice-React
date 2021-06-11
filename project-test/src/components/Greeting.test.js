import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("check if hello world is present", () => {
  //Arrange
  render(<Greeting />);

  //Act
  //...In this case, we don't need to simulate anything like a button click.

  //Assert
  const isFound = screen.getByText("Hello world", { exact: false });
  expect(isFound).toBeInTheDocument();
});
