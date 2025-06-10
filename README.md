```bash
npm install @trpc/client zod dotenv
npm i --save-dev @types/ws
```

Remove ws and use the builtin WebSocket for react native. This will break the integration test for node, but make our event subscription work on react native.