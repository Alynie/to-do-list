# To-Do List App

## Getting Started

Requirements:

- Use React with TypeScript
- Allow the user to create, edit, complete and remove to-do list items
- To-do items are a string with a minimum of 3 chars, max 100 chars
- Persist to-do list items between sessions (localStorage)
- Use whichever CSS styling method you’re most familiar with to design the app
- Bonus: Write unit tests that cover key application functionality
- Bonus: Display a list of completed to-do items on a separate page

## Notes

- I used NextJs because I wanted something that I could spin up very quickly.
  - Additional bonuses were that I don't have to spend a lot of time setting up the routing and it deploys easily with Vercel.
- I added eslint and prettier for general good habits
  - debated adding JsDocs, but for a project this small, I opted to instead make sure that the names are easy enough to understand without comments or annotations
- I used Tailwind for styling because I wanted something simple and quick for a small number of components.
- I used Zustand for state management because it is more robust and maintainable than just keeping track with localstorage alone
  - this allowed me to create reusable hooks and if the project were to grow, I could add slices to keep it all organized and manageable
  - Zustand was also really quick and easy to throw in instead of setting up redux or something similar
- I added a `Clear All` button to allow the user to reset the list
  - It also clears the localStorage as well since that never gets cleared unless it is done manually
- I added validation for the to-do items by utilizing the existing capabilities of form validation
  - used tailwind to help add a little styling to that
  - validation is also in the edit form
- I added unit tests to cover the basic functionality
- I added ids to the to-do items to allow for adding duplicate items without collision
- sorted completed tasks to the bottom of the all tasks list

App is hosted at https://to-do-list-theta-drab.vercel.app/

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+, I used v24.11.1)
- [pnpm](https://pnpm.io/)

### Installation

```sh
pnpm install
```

### Running the App

Start the development server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```sh
pnpm build
pnpm start
```

### Linting

Check code style and catch errors:

```sh
pnpm lint
```

### Formatting

Check formatting:

```sh
pnpm format
```

Auto-fix formatting:

```sh
pnpm format:fix
```

### Testing

Run all unit tests:

```sh
pnpm test
```

Test coverage reports are generated in the `coverage/` directory.

## Tech Stack

- [Vercel](https://vercel.com/docs)
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Jest](https://jestjs.io/) & [Testing Library](https://testing-library.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
