# NGRX Proof of concept

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

This project demonstrates how to:

- normalize complex state tree

- select pieces of state with parameterized selectors

- implement loading indicators

Includes CRUD operations with json-server

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `json-server --port 3000 --routes routes.json --watch db.json` in a separate terminal

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Next stepts:
- flatten the state in order to reduce the complexity of the reducers
- use ngrx/Entity
- implement unit tests
