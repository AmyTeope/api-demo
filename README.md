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

## Docker Setup

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
