[![](https://img.shields.io/badge/first_light_1.0.0-passing-green)](https://github.com/gongahkia/first-light/releases/tag/1.0.0) 

# `First Light`

...

## Rationale

...

## Stack

* *Frontend*: React, Electron.js, Vite, TypeScript
* *Backend*: Node.js
* *DB*: PostgreSQL 
* *Deployment*: Docker 

## Screenshots

...

![]()

![]()

![]()

![]()

## Usage

The below instructions are for locally hosting `First Light`.

1. First execute the below.

```console
$ git clone https://github.com/gongahkia/first-light && cd first-light
$ npm run install:all && npm run build
```

2. Then create a `.env` file at [`apps/api-server`](./apps/api-server/).

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/firstlight"
PORT=4000
```

3. Finally run any of the below.

```console
$ npm run dev:api # Start API server
$ npm run dev:web # Start React frontend
$ npm run dev:electron # Start Electron app

$ npm run docker:build # Run via Docker
$ npm run docker:up # Spin up
$ npm run docker:down # Wind down
```

## Architecture

```mermaid

```

## Support

...

## Legal

...