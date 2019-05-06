# Todos Service

A service to manage todos into a local json database

## Setup

1. Install dependencies using npm: `$ npm install` or yarn: `$ yarn`
2. Copy .env.example into .env and update values

## How to run

1. Run with npm: `$ npm start` or yarn: `$ yarn start`

## Routes

| Method | Route          | Body                                                                                               |
| ------ | -------------- | -------------------------------------------------------------------------------------------------- |
| GET    | /api/todos/    | -                                                                                                  |
| GET    | /api/todos/:id | -                                                                                                  |
| POST   | /api/todos/    | `{ "title": "Sample todo title", "description": "Some description for todo", "completed": false }` |
| PUT    | /api/todos/:id | `{ "title": "Sample todo title", "description": "Some description for todo", "completed": false }` |
| DELETE | /api/todos/:id | -                                                                                                  |

## Tests

1. To run test with npm: `$ npm test` or yarn: `$ yarn test`
