import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MobileNav from "../MobileNav";

describe("MobileNav", () => {
  it("renders the hamburger button", () => {
    render(<MobileNav />);
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("does not show nav links by default", () => {
    render(<MobileNav />);
    expect(screen.queryByText("Services")).not.toBeInTheDocument();
  });

  it("shows nav links after clicking the hamburger", () => {
    render(<MobileNav />);
    fireEvent.click(screen.getByLabelText("Open menu"));

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("shows close button when menu is open", () => {
    render(<MobileNav />);
    fireEvent.click(screen.getByLabelText("Open menu"));

    const closeButtons = screen.getAllByLabelText("Close menu");
    expect(closeButtons.length).toBeGreaterThanOrEqual(1);
  });

  it("hides nav links after closing the menu", () => {
    render(<MobileNav />);
    fireEvent.click(screen.getByLabelText("Open menu"));
    expect(screen.getByText("Services")).toBeInTheDocument();

    const closeButtons = screen.getAllByLabelText("Close menu");
    fireEvent.click(closeButtons[0]);

    expect(screen.queryByText("Services")).not.toBeInTheDocument();
  });

  it("renders correct link hrefs", () => {
    render(<MobileNav />);
    fireEvent.click(screen.getByLabelText("Open menu"));

    const servicesLink = screen.getByText("Services");
    expect(servicesLink.closest("a")).toHaveAttribute("href", "/services");
  });

  it("closes the menu when clicking the backdrop overlay", () => {
    render(<MobileNav />);
    fireEvent.click(screen.getByLabelText("Open menu"));
    expect(screen.getByText("Services")).toBeInTheDocument();

    // The backdrop is the div with bg-black/50 class
    const backdrop = document.querySelector(".fixed.inset-0");
    expect(backdrop).toBeTruthy();
    fireEvent.click(backdrop!);

    expect(screen.queryByText("Services")).not.toBeInTheDocument();
  });

  it("closes the menu when clicking a nav link", () => {
    render(<MobileNav />);
    fireEvent.click(screen.getByLabelText("Open menu"));
    expect(screen.getByText("Services")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Services"));

    expect(screen.queryByText("Services")).not.toBeInTheDocument();
  });
});
