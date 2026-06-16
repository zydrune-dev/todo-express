# Changelog

All notable changes to this project are documented here.

## [0.3.0] - 2026-06-16

### Added

- MVC structure: `controllers/`, `models/todo.js`, and thin route files.
- Nested API router (`routes/apiRoutes.js`) for `GET /todo/api/list` and `DELETE /todo/api/delete`.
- Server-side delete via `deleteTodo` model and JSON request body.
- `localStorage` cache on the list page for optimistic UI updates (fetch on load, instant delete in UI).
- `nodemon.json` to ignore `data/` and avoid server restarts when todos are saved.

### Changed

- List page loads todos from the API instead of `localStorage` alone.
- Updated `home.html`, `README.md`, and this changelog to reflect the hybrid persistence model.

## [0.2.0] - 2026-06-16

### Changed

- Added server-side JSON file persistence in `data/todos.json`.
- `POST /todo/add-new` creates a todo on the server (previously client-side only).

### Added

- `data/todos.json` storage layer (gitignored via `data/` in `.gitignore`).
- `express.json()` and `express.urlencoded()` middleware for request bodies.
- `models/todo.js` with `readStore`, `addTodo`, and `deleteTodo`.

## [0.1.0] - 2026-05-24

### Added

- Initial Express.js scaffold with static HTML views.
- Modular routing via `express.Router` (`routes/todo.js`).
- Client-side todos stored in `localStorage`.
- 404 fallback via catch-all `app.use`.
