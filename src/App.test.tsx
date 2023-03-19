import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";



const server = setupServer(
  rest.get(`https://swapi.dev/api/people/1/`, (req, res, ctx) => {
    return res(ctx.json({ "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/"
    ],
    "species": [],
    "vehicles": [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders birth year attribute', () => {

  render(<App />);
  const linkElement = screen.getByText(/birth year/i);
  expect(linkElement).toBeInTheDocument();

}),

  test('renders mass attribute', () => {

    render(<App />);
    const linkElement = screen.getByText(/mass/i);
    expect(linkElement).toBeInTheDocument();

  }),

  test('renders height attribute', () => {

    render(<App />);
    const linkElement = screen.getByText(/height/i);
    expect(linkElement).toBeInTheDocument();

  });

test("on server error 500, displays correct error message", async () => {
  server.use(
    rest.get(`https://swapi.dev/api/people/1/`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<App />);
  const errorElement = await screen.findByText(/Oops... something went wrong, try again 🤕/i);
  expect(errorElement).toBeInTheDocument();
});

test("on HTTP code 418, displays correct error message", async () => {
  server.use(
    rest.get(`https://swapi.dev/api/people/1/`, (req, res, ctx) => {
      return res(ctx.status(418));
    })
  );
  render(<App />);
  const errorElement = await screen.findByText(/418 I'm a tea pot 🫖 , silly/i);
  expect(errorElement).toBeInTheDocument();
});

