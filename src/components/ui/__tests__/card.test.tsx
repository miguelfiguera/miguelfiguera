import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../card";

describe("Card", () => {
  it("renders with children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders with all sub-components", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("applies custom className to Card", () => {
    render(<Card className="custom-class">Content</Card>);
    expect(screen.getByText("Content").className).toContain("custom-class");
  });

  it("applies custom className to sub-components", () => {
    render(
      <Card>
        <CardHeader className="header-class">Header</CardHeader>
        <CardContent className="content-class">Body</CardContent>
      </Card>
    );

    expect(screen.getByText("Header").className).toContain("header-class");
    expect(screen.getByText("Body").className).toContain("content-class");
  });
});
