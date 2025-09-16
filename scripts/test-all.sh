#!/bin/bash
# Run all tests in the monorepo

set -e

echo "Testing packages..."
cd ../packages/shared-types && npm test
cd ../ui-components && npm test
cd ../utils && npm test

echo "Testing backend..."
cd ../../apps/api-server && npm test

echo "Testing frontend..."
cd ../web-client && npm test

echo "Testing Electron..."
cd ../electron-app && npm test

echo "All tests completed."
