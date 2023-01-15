import { render, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";
import Users from "./Users";
import data from "./data.json";
describe("Test Users component", () => {
  test("Should component renders correctly", () => {
    render(<Users />);
    const text = screen.getByText("Users");
    expect(text).toBeInTheDocument();
  });
  test("Should list of users renders correctly", async () => {
    render(<Users />);
    const text = await screen.findAllByRole("listitem");
    expect(text).toHaveLength(data.length);
  });
  test("Should error renders correctly", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const text = await screen.findByText("Error fetching users");
    expect(text).toBeInTheDocument();
  });
});
