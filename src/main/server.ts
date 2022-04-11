import { prismaClient } from '@/infra/database';
import { App, Env } from '@/main/config';

prismaClient
  .createConnection()
  .then(async () => {
    const app = App();

    app.listen(Env.PORT, () =>
      console.log(`\n> Server is running on port ${Env.PORT}`)
    );
  })
  .catch((err) => console.error(err));
