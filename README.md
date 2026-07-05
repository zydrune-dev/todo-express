# Todo (Express.js learning project)

A small Node/Express app with a growing MVC structure. Todos are persisted on the server in
`data/todos.json`; the list page loads them via a JSON API and keeps a `localStorage` copy for
snappy, optimistic UI updates.

## What was practised

- Setting up an Express 5 server with ES modules.
- MVC layout: routes, controllers, models, and static HTML views.
- Modular routing with `express.Router`, including nested API routes (`routes/apiRoutes.js`).
- Server-side persistence with a JSON file and `fs/promises`.
- Form POSTs (`POST /todo/add-new`) and JSON APIs (`GET /todo/api/list`, `DELETE /todo/api/delete`).
- Request body parsing with `express.urlencoded` and `express.json`.
- Client-side `fetch` + `localStorage` for optimistic list updates.
- Serving static JS/CSS via `express.static`.
- Sending HTML files with `res.sendFile` and a catch-all 404 handler.

## Project structure

```
src/
  app.ts                # Express entry point
  data-source.ts        # TypeORM database connection
  routes/
    todo.js             # Page routes (list, add-new)
    apiRoutes.js        # JSON API routes
  controllers/
    appControllers.js   # Home and 404
    todoControllers.js  # Todo page and API handlers
  models/
    todo.js             # Read/write data/todos.json
  entities/
    Todo.ts             # TypeORM entity
  enums/
    Status.ts           # Todo status enum
  views/                # Static HTML pages
public/js/script.js     # List page: fetch API + optimistic UI
data/todos.json         # Todo storage (gitignored)
```

## Stack

- Node.js (ES modules)
- Express 5
- Plain HTML / CSS / JavaScript on the client
- `data/todos.json` for server-side persistence
- `localStorage` as a client-side cache for the list page

## Getting started

```bash
npm install
npm run dev      # tsx watch (ignores data/ to avoid restarts on todo saves)
# or
npm start        # plain node
```

Open [http://localhost:3000](http://localhost:3000).
