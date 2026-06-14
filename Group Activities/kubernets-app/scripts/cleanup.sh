#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "==> Deleting Kubernetes resources"
kubectl delete -f "${ROOT_DIR}/manifests/service.yaml" --ignore-not-found
kubectl delete -f "${ROOT_DIR}/manifests/deployment.yaml" --ignore-not-found
kubectl delete -f "${ROOT_DIR}/manifests/namespace.yaml" --ignore-not-found

echo ""
echo "Cleanup complete."
echo "To remove the Docker image: docker rmi sample-app:latest"
