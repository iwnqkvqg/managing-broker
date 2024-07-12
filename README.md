# React + TypeScript + Vite

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

===

Run `npm run dev` to start a dev server, then open [http://localhost:5173/] in your browser to see the interface.

Run `npm run test` to run unit tests with coverage report.
Unit tests are implemented using [Vitest] and [React Testing Library].

## Notes:
- Card Header is probably a higher order <h> tag
- Input label is larger than in Figma
- Focus state uses primary color, hover uses the defaults
- typography theming


[Vitest]: https://vitest.dev/
[React Testing Library]: https://testing-library.com/
[http://localhost:5173/]: http://localhost:5173/