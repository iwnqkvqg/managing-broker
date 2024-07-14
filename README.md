# Managing Broker

Run `npm run dev` to start a dev server, then open [http://localhost:5173/] in your browser to see the interface.

Run `npm run test` to run unit tests, or `npm run coverage` to generate a test coverage report.

Unit tests are implemented using [Vitest] and [React Testing Library].

## Variants

The project has two branches:
- [main] contains the baseline version of the application as per Figma specification.
- [enhancements] contains the proposed changes to the application.

## Enhancements

### Search Suggestions
+ Remove the line with the "Add manually" button

### Managing Broker card
+ Add the "Add manually" button after the search input

### Selected entity view
+ Replace readonly input "Name" by labelled text
+ Add the remove button at the bottom of the card

### Modal dialog
+ Set a more explicit dialog header
+ Mark all fields as required
+ Change entity name label to "Name" to make it uniform across the application
+ Change the submit button text
+ Country is a autocomplete field with predefined values
+ Add placeholders


[Vitest]: https://vitest.dev/
[React Testing Library]: https://testing-library.com/
[http://localhost:5173/]: http://localhost:5173/
[main]: https://github.com/iwnqkvqg/managing-broker/tree/main
[enhancements]: https://github.com/iwnqkvqg/managing-broker/tree/enhancements