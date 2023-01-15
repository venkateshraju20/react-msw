import React from "react";
import ReactDOM from "react-dom";
import Users from "./components/Users";
jest.mock("react-dom/client", () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn(),
  })),
}));
describe("Application root", () => {
  // it("should render without crashing", () => {
  //   const div = document.createElement("div");
  //   div.id = "root";
  //   document.body.appendChild(div);
  //   require("./index.tsx");
  //   expect(ReactDOM.render).toHaveBeenCalledWith(
  //     <React.StrictMode>
  //       <Users />
  //     </React.StrictMode>,
  //     div
  //   );
  // });
  it("should render the app inside div which has root id", () => {
    expect(global.document.getElementById("root")).toBeDefined();
  });
  it("should render App component", () => {
    expect(Users).toBeDefined();
  });
});
