#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="${ROOT_DIR}/outputs"
NODE_PORT="${NODE_PORT:-30080}"

mkdir -p "${OUTPUT_DIR}"

echo "==> Pods"
kubectl get pods -n sample-app -o wide | tee "${OUTPUT_DIR}/kubectl-get-pods.txt"

echo ""
echo "==> Services"
kubectl get svc -n sample-app | tee "${OUTPUT_DIR}/kubectl-get-svc.txt"

echo ""
echo "==> Health check via port-forward"
kubectl port-forward -n sample-app svc/sample-app 8080:80 &
PF_PID=$!
trap 'kill ${PF_PID} 2>/dev/null || true' EXIT
sleep 2

HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/health || echo "000")
echo "Health endpoint status: ${HTTP_STATUS}"

if [[ "${HTTP_STATUS}" == "200" ]]; then
  echo "App is healthy."
else
  echo "Health check failed. Try: curl http://localhost:${NODE_PORT} (NodePort) if your cluster exposes it."
  exit 1
fi

echo ""
echo "Test output saved to ${OUTPUT_DIR}/"
