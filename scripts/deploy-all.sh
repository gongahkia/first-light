#!/bin/bash
# Example deployment script (customize host/bucket details for your CI/CD and cloud platform)

set -e

# Deploy backend API (example: Railway, AWS, or similar)
echo "Deploying API server..."
cd ../apps/api-server
# Example: git push railway main  (adjust for your platform)
# railway up

# Deploy web frontend (example: Vercel)
echo "Deploying web client..."
cd ../web-client
# vercel --prod

# Deploy Electron app (release build to GitHub, S3, custom server)
echo "Deploying Electron app..."
cd ../electron-app
# Example release packaging: npm run make (if using electron-forge)
# Custom upload/release -- see your release flow

echo "Deployment complete."
