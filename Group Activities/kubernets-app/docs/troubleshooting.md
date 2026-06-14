# Troubleshooting

Common issues when deploying the Kubernetes sample app.

## Pods stuck in `ImagePullBackOff` or `ErrImageNeverPull`

**Cause:** The cluster cannot find `sample-app:latest`.

**Fix:**

- **Minikube:** Run `eval $(minikube docker-env)` before `./scripts/deploy.sh` so the image is built inside Minikube's Docker daemon.
- **Kind:** After `docker build`, run `kind load docker-image sample-app:latest`.
- **Remote cluster:** Push to a registry and update `manifests/deployment.yaml` with the full image URL (e.g. `docker.io/username/sample-app:latest`).

## Pods in `CrashLoopBackOff`

**Cause:** The app fails to start or health checks fail.

**Fix:**

```bash
kubectl logs -n sample-app -l app=sample-app
kubectl describe pod -n sample-app -l app=sample-app
```

Verify locally: `cd app && npm install && npm start`, then `curl http://localhost:3000/health`.

## Service not reachable on NodePort 30080

**Cause:** NodePort may be blocked or the cluster type does not expose node IPs easily.

**Fix:** Use port-forward instead:

```bash
kubectl port-forward -n sample-app svc/sample-app 8080:80
curl http://localhost:8080/health
```

## `connection refused` on port-forward

**Cause:** Pods are not ready yet.

**Fix:**

```bash
kubectl get pods -n sample-app
kubectl rollout status deployment/sample-app -n sample-app
```

Wait until pods show `Running` and `READY 1/1`.

## Permission denied running scripts

**Fix:**

```bash
chmod +x scripts/*.sh
```

## Namespace already exists

**Cause:** Previous deploy left resources behind.

**Fix:**

```bash
./scripts/cleanup.sh
./scripts/deploy.sh
```
