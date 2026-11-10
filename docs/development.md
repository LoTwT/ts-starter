# 开发指南

## 环境

- Node.js 26 及以上（`package.json` 的 `engines`），pnpm 版本由 `packageManager` 指定。
- `pnpm install` 安装依赖，并通过 `prepare` 安装 pre-commit 钩子。

## 命令

| 命令                | 作用                                                             |
| ------------------- | ---------------------------------------------------------------- |
| `pnpm lint`         | oxlint，包含类型感知规则；失效的 disable 注释也会报错            |
| `pnpm format`       | oxfmt 格式化                                                     |
| `pnpm format:check` | 检查格式，不修改文件                                             |
| `pnpm typecheck`    | `tsc --noEmit`                                                   |
| `pnpm test`         | Vitest；交互终端中进入 watch，非交互环境只运行一次               |
| `pnpm build`        | tsdown 构建到 `dist/`，同时更新 `exports` 并运行 publint 和 attw |
| `pnpm dev`          | 监听构建                                                         |

## 验证

- pre-commit 钩子对整个工作区运行 `lint`、`format:check`、`typecheck`，不修改文件。失败时修复后重新提交，不跳过钩子。
- 修改源码或测试时运行 `pnpm test`；修改入口、导出或打包相关配置时运行 `pnpm build`。

## 编码约定

- 只发布 ESM，不添加 CommonJS 相关字段或产物。
- 导入 `src/` 下的模块使用 `#/` 别名（`package.json` 的 `imports`），不写扩展名，例如 `import { x } from "#/utils"`。
- 测试放在 `tests/`，从 `vitest` 显式导入 `describe`、`it`、`expect`。
- 导出的函数和变量需要显式类型（`isolatedDeclarations`）；不使用 `enum`、`namespace` 和参数属性（`erasableSyntaxOnly`）。
- `exports` 由 `pnpm build` 根据入口自动生成，不手动修改。默认入口是 `src/index.ts`；增加入口时在 `package.json` 的 `tsdown.entry` 中配置。

## 依赖升级

- 大版本升级前先查阅 release notes 中的 breaking changes，升级后运行全部检查。
- pnpm 默认拒绝发布不满 24 小时的版本（`minimumReleaseAge`）。遇到时改用更早的版本或稍后再升级；未经确认，不在 `pnpm-workspace.yaml` 中添加例外。
- `@types/node` 的主版本与 `engines` 中的最低 Node 版本保持一致。
