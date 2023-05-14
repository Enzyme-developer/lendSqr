import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../components/Login";

describe("Login component", () => {
  test("should render the Login component", () => {
    render(<Login />);
    // Assert that the component renders without any errors
  });
});
