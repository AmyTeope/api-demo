# Social Media Demo API

This repo contains an api demo for a social media application.

## Requirements

- NodeJS v21+
- NPM 7+

## Get Started

The following will install all necessary packages and run the app under development mode which uses `nodemon` for reloading the build when changes are made.

```
npm install
```

Install Packages with Homebrew for OS X.

- https://brew.sh

```
brew install yarn docker
```

**Steps**

1. Start Docker.
2. Open the terminal and go to the root of the project.
3. Run `$ docker compose build`.
4. Run `$ docker compose up` or `$ docker compose up -d` to run it in the background.
5. Open a new terminal tab/window and run `$docker compose exec app npx prisma db seed`

Additional information for Docker, the database, documentation, and testing can be found below.

## Docker

A Dockerfile is available to run the backend services in a container exposed through ports. The Docker container
includes the hot reloading Node application, PostgresSQL database, and Redis for caching.

The following services are available currently:

```
app        // Node application
redis      // Redis server
db         // PostgreSQL database
```

To build and run the Docker container, ensure you have the Docker CLI available, and optionally Docker Desktop.

To build the Docker container:

```
docker-compose build
```

To start the Docker container:

```
docker-compose up [-d]
```

To stop the Docker container:

```
docker-compose down
```

To run a specific container only:

```
docker-compose up [-d] <container_name>
```

## Database

To create new migrations from changes made in the schema:

```
docker compose exec app npx prisma migrate dev
```

To seed database:

```
docker compose exec app npx prisma db seed
```

To reset database:

```
docker compose exec app npx prisma migrate reset
```

To generate mutations, queries, and InputTypes:

```
pal g ${OPTIONAL MODEL}
```

To generate code from graphql schema and operations (graphql.ts). To read more [click here](https://the-guild.dev/graphql/codegen/docs/advanced/how-does-it-work)

```
npx graphql-codegen
```

## Documentation

Detailed documentation has been generated using Spectaql.

A live version can be found on on the following link: https://api-demo-docs-30dd2fff303c.herokuapp.com/

Link to view the documentation localally: http://localhost:8000/docs/

To update documentation run the following command:

```
npx spectaql spectal-config.yml
```

For basic examples used in Postman please click on the following [link](https://docs.google.com/document/d/1JFnHrq-Stvegreys2igtCHi-FybkalfY/view).

## Testing

To run the tests please use the following command:

```
npm run test:e2e
```
