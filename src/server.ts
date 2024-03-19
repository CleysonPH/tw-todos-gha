import { app } from './app';
import { env } from './config/env';

const message = `🚀 Server is ready on port ${ env.PORT }`;

app
  .listen({ port: env.PORT, host: '0.0.0.0' })
  .then(() => console.log(message));
