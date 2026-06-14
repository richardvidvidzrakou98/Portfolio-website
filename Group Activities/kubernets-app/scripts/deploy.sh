#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGE_NAME="${IMAGE_NAME:-sample-app:latest}"

echo "==> Building Docker image: ${IMAGE_NAME}"
docker build -t "${IMAGE_NAME}" "${ROOT_DIR}/app"

echo "==> Applying Kubernetes manifests"
kubectl apply -f "${ROOT_DIR}/manifests/namespace.yaml"
kubectl apply -f "${ROOT_DIR}/manifests/deployment.yaml"
kubectl apply -f "${ROOT_DIR}/manifests/service.yaml"

echo "==> Waiting for rollout"
kubectl rollout status deployment/sample-app -n sample-app --timeout=120s

echo ""
echo "Deployment complete."
echo "Run ./scripts/test.sh to verify the app."
