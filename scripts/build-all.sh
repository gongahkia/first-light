#!/bin/bash
# Build all apps and packages in the monorepo

set -e

echo "Building shared packages..."
cd ../packages/shared-types && npm run build
cd ../ui-components && npm run build
cd ../utils && npm run build

echo "Building Express backend..."
cd ../../apps/api-server && npm run build

echo "Building React frontend..."
cd ../web-client && npm run build

echo "Building Electron app..."
cd ../electron-app && npm run build

echo "Build complete."
