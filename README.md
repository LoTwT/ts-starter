# pkg-name

A starter template for pure ESM TypeScript libraries.

## Stack

- [pnpm](https://pnpm.io) - package manager
- [tsdown](https://tsdown.dev) - bundler; generates `exports` and runs publint and attw on build
- [Vitest](https://vitest.dev) - test framework
- [oxlint](https://oxc.rs/docs/guide/usage/linter) - type-aware linter
- [oxfmt](https://oxc.rs/docs/guide/usage/formatter) - formatter
- [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) - pre-commit checks
- [bumpp](https://github.com/antfu-collective/bumpp) - version bump and release
- [taze](https://github.com/antfu-collective/taze) - dependency updates

## Requirements

- Node.js 26 or later
- pnpm (version pinned in `packageManager`)

## Usage

1. Replace `pkg-name` and the author in `package.json`.
2. Update the copyright holder in `LICENSE`.
3. Run `pnpm install`.

## Scripts

| Script              | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Build in watch mode                    |
| `pnpm build`        | Build to `dist/` and check the package |
| `pnpm test`         | Run tests                              |
| `pnpm lint`         | Lint with oxlint                       |
| `pnpm format`       | Format with oxfmt                      |
| `pnpm format:check` | Check formatting without writing       |
| `pnpm typecheck`    | Type-check with tsc                    |
| `pnpm release`      | Bump the version, tag, and publish     |
| `pnpm deps`         | Update dependencies interactively      |

## License

[MIT](./LICENSE)
