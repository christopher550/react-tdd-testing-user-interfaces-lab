import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", { name: /hi, i'm/i, level: 1 });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with correct alt text and src", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of your name/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "your-image.jpg");
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph with a biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a passionate developer/i);
  expect(paragraph).toBeInTheDocument();
});

test("displays a GitHub link with correct href", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
});

test("displays a LinkedIn link with correct href", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/yourusername");
});
