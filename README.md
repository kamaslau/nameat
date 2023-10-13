This is a [Tauri app](https://tauri.app/) serving [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Feature summary

Propose a snack trip map with the name that user inputs which meets facility name initials.

## Getting Started

### [Optional] Prerequisites

To facilitate dev and build features, latest LTS version of [Node.js](https://nodejs.org/en/download/current) and [Rust-lang](https://www.rust-lang.org/tools/install) should be installed.

However, if you just want to try-out the idea, you could directly download macOS or Windows clients that supports latest OS versions.

```bash
cp .env.sample .env.local # for demo purpose, keep sample .env file as is

# development/preview with hot-load
pnpm tauri dev

# build release installer, default with local arch
pnpm tauri build
```

Installer exec files could be found in [release directory](./src-tauri/target/release/bundle) .

## R&D time cost

- 1H for data model inspecting, dataset export, and product design
- 1H for Google Cloud payment registering, docs, sdk trialing
- 3H for feature coding and tests on the way
- .5H for wrapping up and publishing, testing is yet to be added

P.S. Interesting event, thanks for the joy.
