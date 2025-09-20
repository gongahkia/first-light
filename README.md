[![](https://img.shields.io/badge/first_light_1.0.0-passing-green)](https://github.com/gongahkia/first-light/releases/tag/1.0.0) 

# `First Light`

*"Just 5 more minutes"*.

## Rationale

`First Light` transforms the guilt-ridden exercise of waking up late into a competitive sport. Because sleeping through the 50 alarms you set shouldn't be the norm.

<div align="center">
    <img src="./asset/logo/alarm.webp" width="35%">
</div>

## Stack

* *Frontend*: [React](https://react.dev/), [Electron.js](https://www.electronjs.org/), [Vite](https://vite.dev/), [TypeScript](https://www.typescriptlang.org/)
* *Backend*: [Node.js](https://nodejs.org/en)
* *DB*: [PostgreSQL](https://www.postgresql.org/), [Prisma](https://www.prisma.io/)
* *Package*: [Docker](https://www.docker.com/)

## Screenshot

<div align="center">
    <img src="./asset/references/image.png" width="40%">
</div>

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
C4Context
    title System Context Diagram for First Light Application

    Person(user, "User", "A user of the First Light application")

    System(web_client, "Web Client", "Web-based interface for the application (React, Redux, Zustand, Tailwind CSS)")
    System(electron_app, "Electron App", "Desktop application interface (Electron)")
    System(api_server, "API Server", "Backend API for business logic and data persistence (Express, Prisma, Zod)")
    System(postgresql, "PostgreSQL Database", "Stores application data (Users, Groups, CheckIns)")

    Rel(user, web_client, "Uses")
    Rel(user, electron_app, "Uses")
    Rel(web_client, api_server, "Makes API calls to", "HTTP/S")
    Rel(electron_app, api_server, "Makes API calls to", "HTTP/S")
    Rel(api_server, postgresql, "Reads from and writes to", "SQL")

    Boundary(monorepo, "First Light Monorepo") {
        System_Ext(web_client, "Web Client")
        System_Ext(electron_app, "Electron App")
        System_Ext(api_server, "API Server")

        Boundary(packages, "Shared Packages") {
            Component(shared_types, "Shared Types", "TypeScript interfaces and types")
            Component(ui_components, "UI Components", "Reusable React UI components")
            Component(utils, "Utilities", "Common utility functions")
        }
    }

    Rel(api_server, shared_types, "Uses")
    Rel(api_server, utils, "Uses")
    Rel(web_client, shared_types, "Uses")
    Rel(web_client, ui_components, "Uses")
    Rel(web_client, utils, "Uses")
    Rel(electron_app, shared_types, "Uses")
    Rel(electron_app, utils, "Uses")
```

### API Server Container Diagram

```mermaid
C4Container
    title Container Diagram for API Server

    Container(api_server_container, "API Server", "Node.js (Express)", "Handles API requests, business logic, and data persistence")
    ContainerDb(db_container, "PostgreSQL Database", "Relational Database", "Stores User, Group, and CheckIn data")

    Rel(api_server_container, db_container, "Connects to", "SQL (Prisma ORM)")

    Boundary(api_server_internal, "API Server Internal Components") {
        Component(controllers, "Controllers", "Handles request routing and validation (Zod)")
        Component(services, "Services", "Contains business logic")
        Component(routes, "Routes", "Defines API endpoints")
        Component(prisma_client, "Prisma Client", "ORM for database interaction")
    }

    Rel(controllers, services, "Calls")
    Rel(routes, controllers, "Routes to")
    Rel(services, prisma_client, "Uses")
    Rel(prisma_client, db_container, "Interacts with")
```

### Web Client Container Diagram

```mermaid
C4Container
    title Container Diagram for Web Client

    Container(web_client_container, "Web Client", "React, Vite", "User interface for the application")
    Container(api_server_ext, "API Server", "Node.js (Express)", "Provides backend API")

    Rel(web_client_container, api_server_ext, "Makes API calls to", "HTTP/S")

    Boundary(web_client_internal, "Web Client Internal Components") {
        Component(react_components, "React Components", "UI elements and pages (e.g., HomePage, GroupPage)")
        Component(state_management, "State Management", "Redux Toolkit, Zustand")
        Component(router, "React Router", "Handles client-side navigation")
        Component(tailwind_css, "Tailwind CSS", "Styling framework")
        Component(api_utils, "API Utilities", "Functions for interacting with API Server")
    }

    Rel(react_components, state_management, "Uses")
    Rel(react_components, router, "Uses")
    Rel(react_components, tailwind_css, "Uses")
    Rel(react_components, api_utils, "Uses")
    Rel(api_utils, api_server_ext, "Calls")
```

### Electron App Container Diagram

```mermaid
C4Container
    title Container Diagram for Electron App

    Container(electron_app_container, "Electron App", "Electron, TypeScript", "Desktop application")
    Container(api_server_ext_electron, "API Server", "Node.js (Express)", "Provides backend API")

    Rel(electron_app_container, api_server_ext_electron, "Makes API calls to", "HTTP/S")

    Boundary(electron_app_internal, "Electron App Internal Components") {
        Component(main_process, "Main Process", "Manages native desktop features and windows")
        Component(renderer_process, "Renderer Process", "Web content (HTML, CSS, JS) for UI")
        Component(preload_script, "Preload Script", "Exposes Node.js APIs to renderer process")
    }

    Rel(main_process, renderer_process, "Manages")
    Rel(renderer_process, preload_script, "Uses exposed APIs")
    Rel(renderer_process, api_server_ext_electron, "Makes API calls to (via preload or direct)")
```

### Shared Types Package Diagram

```mermaid
C4Container
    title Container Diagram for Shared Types Package

    Container(shared_types_package, "Shared Types Package", "TypeScript", "Defines common data structures")

    Boundary(shared_types_internal, "Shared Types") {
        Component(user_type, "User Type", "User interface/type")
        Component(group_type, "Group Type", "Group interface/type")
        Component(checkin_type, "CheckIn Type", "CheckIn interface/type")
    }
```

### UI Components Package Diagram

```mermaid
C4Container
    title Container Diagram for UI Components Package

    Container(ui_components_package, "UI Components Package", "React, TypeScript", "Collection of reusable UI components")

    Boundary(ui_components_internal, "UI Components") {
        Component(button_comp, "Button", "Reusable button component")
        Component(card_comp, "Card", "Reusable card component")
        Component(input_comp, "Input", "Reusable input component")
        Component(modal_comp, "Modal", "Reusable modal component")
    }
```

### Utils Package Diagram

```mermaid
C4Container
    title Container Diagram for Utils Package

    Container(utils_package, "Utils Package", "TypeScript", "Collection of utility functions")

    Boundary(utils_internal, "Utilities") {
        Component(api_utils_func, "API Utilities", "Functions for API interaction")
        Component(time_utils_func, "Time Utilities", "Functions for time manipulation")
        Component(validators_func, "Validators", "Functions for data validation")
    }
```

## Support

| Platform | Status | Version |
|----------|--------|----------|
| Web (Chrome) | ✅ Supported | Latest |
| Web (Firefox) | ✅ Supported | Latest |
| Web (Safari) | ✅ Supported | Latest |
| Web (Edge) | ✅ Supported | Latest |
| Desktop (Windows) | ✅ Supported | Electron |
| Desktop (macOS) | ✅ Supported | Electron |
| Desktop (Linux) | ✅ Supported | Electron |
| Mobile (iOS) | ❌ Not yet | Future |
| Mobile (Android) | ❌ Not yet | Future |

For support, please [open an issue](https://github.com/gongahkia/first-light/issues) on GitHub.

## Legal

**Disclaimer:** First Light is provided "as is" without warranty of any kind, express or implied. This accountability and check-in application is designed for personal and team productivity purposes. Users are responsible for their own data and usage of the application.
