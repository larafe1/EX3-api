# EX3 API

### Technologies used

- TypeScript
- Node.js
- Express.js
- PrismaIO
- PostgreSQL
- Docker
- And more...

### Setting up the API with `docker-compose`

First things first, you'll need to change the `.env.example` file to `.env` and fill in the values with your credentials.

- PORT (if you prefer to use a different port than 3333, if not, you can leave it blank)
- USER
- PASSWORD
- DB_NAME

Then, you can run the following command to start the API:

```bash
sudo docker-compose up
```

After that, you'll have to migrate the database manually. For that, you'll need to SSH into the container. You can do that by running the following commands:

```bash
sudo docker exec -it <container_id> /bin/bash

npx prisma migrate dev
```

Everything is set up and you can start using the API.
