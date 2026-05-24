# Todo (Express.js learning project)
A small Node/Express app that's deliberately simple — todos are stored in the browser's `localStorage`,
so there's no database. The focus is the server side: routing, static files,
and the difference between `app.get("/")` and `app.use("/")`.

## What was practised
- Setting up an Express 5 server with ES modules.
- Modular routing with `express.Router` (see `routes/todo.js`).
- The difference between exact-match (`app.get("/")`) and prefix-match
  (`app.use("/")`) — and why the 404 handler has to come last.
- Serving static JS/CSS via `express.static`.
- Sending HTML files with `res.sendFile`.
- Vanilla JS in the browser: DOM manipulation,
  `localStorage`, event listeners, `replaceChildren`.

## Stack
- Node.js (ES modules)
- Express 5
- Plain HTML / CSS / JavaScript on the client
- `localStorage` for "persistence"

## Getting started
```bash
npm install
npm run dev      # nodemon, restarts on file change
# or
npm start        # plain node