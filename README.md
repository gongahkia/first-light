[![](https://img.shields.io/badge/first_light_1.0.0-passing-green)](https://github.com/gongahkia/first-light/releases/tag/1.0.0) 

## Development Setup

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL (for local development)

### Environment Configuration

Create a `.env` file in the `apps/api-server` directory:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/firstlight"
PORT=4000
```

### Quick Start

```bash
# Install all dependencies
npm run install:all

# Build all applications
npm run build

# Development mode
npm run dev:api    # Start API server
npm run dev:web    # Start React frontend
npm run dev:electron  # Start Electron app

# Docker deployment
npm run docker:build  # Build containers
npm run docker:up     # Start all services
npm run docker:down   # Stop all services
```

### Project Structure

- `apps/api-server` - Node.js/Express API with Prisma ORM
- `apps/web-client` - React frontend with Vite and TailwindCSS
- `apps/electron-app` - Electron desktop application
- `packages/shared-types` - Shared TypeScript type definitions
- `packages/ui-components` - Reusable UI components
- `packages/utils` - Shared utility functions
- `docker/` - Docker Compose configuration

# `First Light`

...

## Rationale

...

## Stack

...

## Screenshots

...

## Usage

...

## Support

...

## Architecture

...

## Legal

...

## Reference

...