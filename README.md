# Todos Service

A service to save todos into a local json database

## Setup

1. Install dependencies `$ npm install`
2. Copy .env.example into .env and update values

## How to run

1. Run `$ npm start`

## Routes

| Method | Route          | Body                                                                                               |
| ------ | -------------- | -------------------------------------------------------------------------------------------------- |
| GET    | /api/todos/    | -                                                                                                  |
| GET    | /api/todos/:id | -                                                                                                  |
| POST   | /api/todos/    | `{ "title": "Sample todo title", "description": "Some description for todo", "completed": false }` |
| PUT    | /api/todos/:id | `{ "title": "Sample todo title", "description": "Some description for todo", "completed": false }` |
| DELETE | /api/todos/:id | -                                                                                                  |

## Tests

1. To run test `$ npm test`

## Features

1. Separation of concerns within the app (See file structure)
2. Clean entry point (See server.js)
3. Use of environment for configuration
4. Sample tests
5. Sample custom middleware
6. Sample error handling
