# Basic Commands

## Run the project locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build for production

```bash
npm run build
```

## Start production server

```bash
npm run start
```

## Lint the project

```bash
npm run lint
```

## Common Next.js development tips

- Use `npm run dev` for local development
- Use `npm run build` before deployment
- Use `npm run start` to preview the production build
- Use `npm run lint` to check code quality

## Troubleshooting

If the app is not starting:

```bash
rm -rf .next node_modules
npm install
npm run dev
```

> Note: On Windows PowerShell, use `Remove-Item -Recurse -Force .next, node_modules` instead of `rm -rf`.
