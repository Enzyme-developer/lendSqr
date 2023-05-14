import { render, screen } from "@testing-library/react";
import axios from "axios";
import Home from "../pages/Home";

jest.mock("axios");

test("should fetch and display data", async () => {
  const mockData = { name: "John Doe", age: 25 };
  (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

  render(<Home />);

  // Wait for the component to finish rendering and data to be fetched
  await screen.findByText("Name: John Doe");
  await screen.findByText("Age: 25");

  // Perform assertions based on the fetched data
  expect(screen.getByText("Name: John Doe")).toBeInTheDocument();
  expect(screen.getByText("Age: 25")).toBeInTheDocument();
});
