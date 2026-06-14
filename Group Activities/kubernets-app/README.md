# Kubernetes Sample App

A simple Node.js web application deployed to Kubernetes. This project demonstrates namespace creation, Deployment, Service, health probes, and helper scripts for deploy/test/cleanup.

## Project structure

```
kubernetes-sample-app-project/
├── README.md
├── manifests/          # Kubernetes YAML
├── app/                # Node.js app + Dockerfile
├── scripts/            # deploy, test, cleanup
├── docs/               # troubleshooting + screenshots
└── outputs/            # saved command output
```

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- A running Kubernetes cluster (Minikube, Kind, Docker Desktop, or cloud)

For local clusters, load the image after building:

```bash
# Minikube
eval $(minikube docker-env)
./scripts/deploy.sh

# Kind
docker build -t sample-app:latest app/
kind load docker-image sample-app:latest
kubectl apply -f manifests/
```

## Quick start

```bash
chmod +x scripts/*.sh
./scripts/deploy.sh
./scripts/test.sh
```

Access the app:

- **Port-forward:** `kubectl port-forward -n sample-app svc/sample-app 8080:80` → http://localhost:8080
- **NodePort:** http://\<node-ip\>:30080 (if supported by your cluster)

## Local development (without Kubernetes)

```bash
cd app
npm install
npm start
# Open http://localhost:3000
```

## Scaling & rolling updates

```bash
# Scale to 3 replicas
kubectl scale deployment/sample-app -n sample-app --replicas=3

# Rolling update (after rebuilding image)
docker build -t sample-app:latest app/
kubectl rollout restart deployment/sample-app -n sample-app
kubectl rollout status deployment/sample-app -n sample-app
```

Save outputs to `outputs/` for documentation.

## Cleanup

```bash
./scripts/cleanup.sh
```

## Documentation

- [Troubleshooting guide](docs/troubleshooting.md)
- Screenshots: place captures in `docs/screenshots/`

## App endpoints

| Endpoint   | Description        |
|-----------|--------------------|
| `GET /`   | Sample web page    |
| `GET /health` | JSON health check |
