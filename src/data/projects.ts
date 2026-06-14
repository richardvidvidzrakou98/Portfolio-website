export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "Web" | "Cloud" | "AI" | "Security" | "Mobile";
  year: string;
  role: string;
  timeline: string;
  impact: string;
  summary: string;
  techStack: { name: string; type: string }[];
  overview: string;
  problemStatement: string;
  painPoints: string[];
  goals: { title: string; description: string }[];
  architecture: {
    description: string;
    points: { title: string; description: string }[];
  };
  challenges: ProjectChallenge[];
  lessons: string[];
  nextSlug: string;
  prevSlug: string;
}

export const projectsData: Project[] = [
  {
    slug: "cloud-ci-pipeline",
    title: "Cloud CI Pipeline",
    category: "Cloud",
    year: "2026",
    role: "DevOps Engineer",
    timeline: "Group Lab — Apache HTTP",
    impact: "Automated build & test on every push",
    summary: "GitHub Actions CI pipeline for a Python application with automated checkout, dependency installation, application startup validation, and pytest execution on every push.",
    techStack: [
      { name: "GitHub Actions", type: "CI/CD" },
      { name: "Python 3.11", type: "Runtime" },
      { name: "pytest", type: "Testing" },
      { name: "Git", type: "Version Control" },
    ],
    overview: "Built as part of a cloud engineering group activity, this project implements a complete continuous integration workflow. The repository hosts a lightweight Python application alongside automated tests, with a GitHub Actions workflow that runs on every push to validate the application starts correctly and all tests pass.",
    problemStatement: "Manual verification of code changes before merge is slow and error-prone. Without an automated pipeline, broken builds can reach shared branches and block teammates. The lab required setting up a version-controlled project, configuring local development, and wiring a CI pipeline that runs tests automatically.",
    painPoints: [
      "No automated feedback loop when pushing code changes.",
      "Manual test execution is easy to skip under time pressure.",
      "Inconsistent local Python environments causing 'works on my machine' failures.",
    ],
    goals: [
      { title: "Push-Triggered CI", description: "Run automated build and test steps on every push to the main branch." },
      { title: "Reproducible Environment", description: "Use GitHub-hosted Ubuntu runners with pinned Python 3.11 for consistent results." },
    ],
    architecture: {
      description: "A single GitHub Actions workflow orchestrates four stages: repository checkout, Python environment setup, application execution, and pytest validation. The workflow file lives in `.github/workflows/ci.yml` and triggers on push events.",
      points: [
        { title: "Checkout & Setup", description: "Uses actions/checkout@v4 and actions/setup-python@v5 to prepare a clean runner with Python 3.11." },
        { title: "Test Gate", description: "pytest runs subprocess tests against app.py, asserting the application exits cleanly with return code 0." },
      ],
    },
    challenges: [
      {
        challenge: "Validating Application Startup in CI",
        solution: "Rather than only checking syntax, the test suite runs app.py as a subprocess and asserts a zero exit code. This confirms the entry point executes successfully in the CI environment, not just locally.",
      },
      {
        challenge: "Minimal Dependency Surface",
        solution: "The pipeline installs only pytest at runtime, keeping the CI environment lean. Application dependencies are kept minimal so the focus stays on pipeline mechanics rather than complex package resolution.",
      },
    ],
    lessons: [
      "Even a simple CI pipeline dramatically improves confidence when collaborating in a group.",
      "Subprocess-based smoke tests catch runtime issues that static analysis misses.",
      "Workflow-as-code in `.github/workflows/` makes pipeline behavior reviewable in pull requests.",
    ],
    nextSlug: "kubernetes-sample-app",
    prevSlug: "aws-codebuild-pipeline",
  },


  
  {
    slug: "kubernetes-sample-app",
    title: "Kubernetes Sample App",
    category: "Cloud",
    year: "2024",
    role: "Cloud Engineer",
    timeline: "Group Lab — Container Orchestration",
    impact: "2-replica deployment with health probes",
    summary: "Node.js web application containerized with Docker and deployed to Kubernetes using Deployments, Services, readiness/liveness probes, scaling, and rolling update workflows.",
    techStack: [
      { name: "Kubernetes", type: "Orchestration" },
      { name: "Docker", type: "Containerization" },
      { name: "Node.js / Express", type: "Application" },
      { name: "kubectl", type: "CLI" },
    ],
    overview: "A hands-on Kubernetes deployment project featuring a Node.js Express application packaged in Docker and orchestrated with native Kubernetes manifests. The project covers namespace isolation, multi-replica Deployments, Service exposure via port-forward and NodePort, resource limits, and operational scripts for deploy, test, and cleanup.",
    problemStatement: "Running containerized applications in production requires more than a Dockerfile — workloads need health monitoring, horizontal scaling, zero-downtime updates, and repeatable deployment procedures. This lab exercise built those capabilities from scratch using Kubernetes primitives.",
    painPoints: [
      "Single-container deployments lack automatic restart and health checking.",
      "Manual kubectl commands are error-prone without scripted deploy workflows.",
      "Scaling and rolling updates require understanding Deployment controller behavior.",
    ],
    goals: [
      { title: "Production-Ready Manifests", description: "Define Deployment with readiness and liveness HTTP probes against a /health endpoint." },
      { title: "Operational Tooling", description: "Provide deploy.sh, test.sh, and cleanup.sh scripts for repeatable cluster operations." },
    ],
    architecture: {
      description: "The application runs as a Deployment with 2 replicas in a dedicated `sample-app` namespace. Each pod exposes port 3000 with CPU/memory requests and limits. A ClusterIP Service routes traffic, accessible locally via port-forward or NodePort 30080.",
      points: [
        { title: "Health Probes", description: "Readiness probe (5s initial delay) gates traffic; liveness probe (10s initial delay) restarts unhealthy pods automatically." },
        { title: "Rolling Updates", description: "Image rebuilds trigger `kubectl rollout restart` with status monitoring for zero-downtime deployments." },
      ],
    },
    challenges: [
      {
        challenge: "Local Cluster Image Loading",
        solution: "Minikube and Kind require loading locally built images into the cluster runtime rather than pulling from a registry. Documented separate workflows: `eval $(minikube docker-env)` for Minikube and `kind load docker-image` for Kind.",
      },
      {
        challenge: "Pod Identity in Responses",
        solution: "Injected the pod hostname via the Downward API (`metadata.name` fieldRef) so the /health endpoint returns which replica handled the request — useful for verifying load distribution during scaling tests.",
      },
    ],
    lessons: [
      "Readiness and liveness probes are essential for self-healing workloads.",
      "Helper scripts turn complex kubectl sequences into one-command operations.",
      "Saving command outputs to an `outputs/` directory creates an audit trail for lab documentation.",
    ],
    nextSlug: "docker-compose-stack",
    prevSlug: "cloud-ci-pipeline",
  },
  {
    slug: "docker-compose-stack",
    title: "Docker Compose Full-Stack",
    category: "Cloud",
    year: "2024",
    role: "DevOps Engineer",
    timeline: "Group Lab — Multi-Container Apps",
    impact: "Frontend + API on isolated containers",
    summary: "Multi-container application with an NGINX frontend and Flask REST API orchestrated via Docker Compose, demonstrating service isolation, port mapping, and compose lifecycle management.",
    techStack: [
      { name: "Docker Compose", type: "Orchestration" },
      { name: "NGINX", type: "Frontend" },
      { name: "Flask / Python", type: "Backend API" },
      { name: "Docker", type: "Containerization" },
    ],
    overview: "A Docker Compose project that runs two independent services: a static NGINX frontend served on port 8080 and a Flask backend API on port 5000 with /api/message and /api/health endpoints. Each service has its own Dockerfile, demonstrating how multi-container applications are structured, built, and managed as a single stack.",
    problemStatement: "Modern applications rarely run as a single process. Frontend and backend teams often deploy independently, but developers need a local environment that mirrors production topology. Docker Compose provides a declarative way to define, build, and run multi-service applications with a single command.",
    painPoints: [
      "Running frontend and backend manually requires coordinating multiple terminal sessions.",
      "Without containerization, dependency conflicts arise between Python and web server environments.",
      "No unified way to start, stop, and inspect logs across services.",
    ],
    goals: [
      { title: "Service Separation", description: "Build independent Dockerfiles for NGINX frontend and Flask API with clear port contracts." },
      { title: "Compose Lifecycle", description: "Use docker compose up/down/logs/ps commands to manage the full stack." },
    ],
    architecture: {
      description: "The compose file defines two services under version 3.8. The frontend builds from `./frontend` and maps host port 8080 to container port 80. The backend builds from `./backend`, exposing Flask on port 5000 with JSON health and message endpoints.",
      points: [
        { title: "Frontend Container", description: "NGINX serves a static HTML welcome page confirming the multi-container setup is operational." },
        { title: "Backend Container", description: "Flask exposes REST endpoints returning JSON status payloads for health checks and API verification." },
      ],
    },
    challenges: [
      {
        challenge: "Independent Service Builds",
        solution: "Each service directory contains its own Dockerfile and source code, allowing independent rebuilds with `docker compose build frontend` or `docker compose build backend` without affecting the other service.",
      },
      {
        challenge: "Verifying Both Services",
        solution: "Documented separate verification steps: browser check on localhost:8080 for the frontend and curl against localhost:5000/api/health for the backend, confirming both containers run concurrently.",
      },
    ],
    lessons: [
      "Docker Compose dramatically simplifies local multi-service development.",
      "Clear port mapping documentation prevents the most common networking mistakes.",
      "Health endpoints on backend services enable future integration with orchestrators like Kubernetes.",
    ],
    nextSlug: "aws-cloud-migration",
    prevSlug: "kubernetes-sample-app",
  },
  {
    slug: "aws-cloud-migration",
    title: "AWS Cloud Migration Lab",
    category: "Cloud",
    year: "2024",
    role: "Cloud Engineer",
    timeline: "Group Lab — Migration Strategies",
    impact: "Lift-and-shift + replatforming demonstrated",
    summary: "Hands-on AWS migration exercise covering rehosting an on-prem application on EC2, deploying updates via GitHub pull workflow, and replatforming the same application to Elastic Beanstalk.",
    techStack: [
      { name: "AWS EC2", type: "Compute" },
      { name: "Elastic Beanstalk", type: "PaaS" },
      { name: "GitHub", type: "Source Control" },
      { name: "Apache HTTP Server", type: "Web Server" },
    ],
    overview: "This group activity walked through two core cloud migration strategies using the same web application. First, a lift-and-shift (rehost) deployment onto EC2 with manual server configuration and Git-based code updates. Then, replatforming to Elastic Beanstalk where AWS manages infrastructure, deployment, and scaling automatically.",
    problemStatement: "Organizations migrating to AWS must choose between migration strategies with different trade-offs. Rehosting preserves full infrastructure control but requires manual operations. Replatforming reduces operational burden but shifts control to managed services. Understanding both paths is critical for cloud architects.",
    painPoints: [
      "On-prem applications require manual provisioning and configuration on EC2.",
      "Deploying code updates to EC2 involves SSH, git pull, and web server restarts.",
      "Comparing migration strategies without hands-on experience leads to poor architectural decisions.",
    ],
    goals: [
      { title: "Rehost on EC2", description: "Deploy the application on EC2 with full control over the web server and deployment process." },
      { title: "Replatform to Beanstalk", description: "Migrate the same application to Elastic Beanstalk and compare operational differences." },
    ],
    architecture: {
      description: "The migration followed a two-phase approach. Phase one: provision EC2, configure Apache HTTP, deploy application code, and validate updates via GitHub push/pull workflow. Phase two: package the same application for Elastic Beanstalk, deploy through the AWS console, and redeploy after code changes.",
      points: [
        { title: "EC2 (Lift & Shift)", description: "Full infrastructure control with manual deployment, server configuration, and update management." },
        { title: "Elastic Beanstalk (Replatform)", description: "AWS-managed infrastructure with automated deployment, minimal setup, and simplified operations." },
      ],
    },
    challenges: [
      {
        challenge: "Keeping EC2 in Sync with GitHub",
        solution: "Established a workflow where code pushed to GitHub is pulled onto the EC2 instance, and the web server serves the updated application — demonstrating the manual deployment loop common in rehost migrations.",
      },
      {
        challenge: "Evaluating Infrastructure Trade-offs",
        solution: "Documented a side-by-side comparison: EC2 offers flexibility and full control at the cost of complexity, while Elastic Beanstalk trades control for simplicity and automated deployment.",
      },
    ],
    lessons: [
      "Lift-and-shift is fastest to execute but carries the most operational overhead forward.",
      "Replatforming to managed services like Elastic Beanstalk reduces day-two operations significantly.",
      "Migration strategy should match team capability, timeline, and long-term operational goals.",
    ],
    nextSlug: "terraform-ec2-infrastructure",
    prevSlug: "docker-compose-stack",
  },
  {
    slug: "terraform-ec2-infrastructure",
    title: "Terraform EC2 Infrastructure",
    category: "Cloud",
    year: "2024",
    role: "Infrastructure Engineer",
    timeline: "Group Lab — Infrastructure as Code",
    impact: "Repeatable EC2 provisioning via IaC",
    summary: "Terraform project for provisioning AWS EC2 instances with IAM configuration, project initialization, user data scripts, and apply/destroy lifecycle management.",
    techStack: [
      { name: "Terraform", type: "IaC" },
      { name: "AWS EC2", type: "Compute" },
      { name: "AWS IAM", type: "Identity" },
      { name: "HCL", type: "Configuration" },
    ],
    overview: "An Infrastructure-as-Code lab using Terraform to provision AWS resources declaratively. The project covered IAM user and AWS credential configuration, Terraform project setup with init/plan/apply workflow, EC2 instance provisioning, and user data scripts for automated instance bootstrapping.",
    problemStatement: "Manual AWS console provisioning is not reproducible, not version-controlled, and prone to configuration drift. Infrastructure as Code tools like Terraform allow teams to define cloud resources in declarative configuration files that can be reviewed, tested, and applied consistently.",
    painPoints: [
      "Manual EC2 creation through the console lacks repeatability across environments.",
      "No version history or peer review for infrastructure changes.",
      "Bootstrapping instances requires manual post-provisioning configuration.",
    ],
    goals: [
      { title: "Declarative Provisioning", description: "Define EC2 instances and supporting resources in Terraform configuration files." },
      { title: "Automated Bootstrapping", description: "Use EC2 user data scripts to configure instances automatically on first boot." },
    ],
    architecture: {
      description: "The Terraform project follows standard workflow: configure AWS IAM credentials, initialize the project with `terraform init`, plan changes with `terraform plan`, and apply with `terraform apply`. EC2 instances are defined with user data for automated setup on launch.",
      points: [
        { title: "IAM Configuration", description: "Set up IAM user credentials with appropriate permissions for EC2 provisioning via Terraform." },
        { title: "User Data Scripts", description: "EC2 instances receive bootstrap scripts at launch, eliminating manual post-provisioning steps." },
      ],
    },
    challenges: [
      {
        challenge: "AWS Credential Management",
        solution: "Configured IAM user credentials securely for Terraform provider authentication, ensuring the apply workflow has the minimum permissions needed for EC2 provisioning.",
      },
      {
        challenge: "Instance Bootstrapping",
        solution: "Added user data scripts to EC2 instance definitions so applications and dependencies install automatically on first boot, closing the gap between infrastructure provisioning and application readiness.",
      },
    ],
    lessons: [
      "Terraform plan output is essential for reviewing infrastructure changes before apply.",
      "User data scripts bridge the gap between 'instance exists' and 'instance is ready'.",
      "IaC makes infrastructure changes auditable through version control history.",
    ],
    nextSlug: "aws-static-hosting-autoscaling",
    prevSlug: "aws-cloud-migration",
  },
  {
    slug: "aws-static-hosting-autoscaling",
    title: "AWS Static Hosting & Auto Scaling",
    category: "Cloud",
    year: "2024",
    role: "Cloud Engineer",
    timeline: "Group Lab — AWS Services",
    impact: "S3 static hosting + EC2 auto scaling",
    summary: "Two complementary AWS labs: static website hosting via S3 with multi-step deployment workflow, and EC2 auto scaling configuration with S3 integration for resilient, cost-efficient infrastructure.",
    techStack: [
      { name: "Amazon S3", type: "Storage" },
      { name: "AWS EC2", type: "Compute" },
      { name: "Auto Scaling", type: "Resilience" },
      { name: "Static HTML/CSS", type: "Frontend" },
    ],
    overview: "Combined documentation from two group activities: a static web hosting lab deploying HTML/CSS sites to S3 with a nine-step configuration workflow, and an EC2 with S3 auto scaling lab covering nine steps of scaling group setup. Together they demonstrate foundational AWS patterns for serving static content and building resilient compute infrastructure.",
    problemStatement: "Serving web content and handling variable traffic loads are core cloud engineering challenges. Static sites belong on object storage, not compute instances. Dynamic workloads need auto scaling to maintain availability without over-provisioning. These labs built both capabilities hands-on.",
    painPoints: [
      "Running static websites on EC2 wastes compute resources and increases cost.",
      "Fixed-size EC2 fleets cannot adapt to traffic spikes or lulls.",
      "Without documented step-by-step workflows, AWS console tasks are hard to reproduce.",
    ],
    goals: [
      { title: "S3 Static Hosting", description: "Configure S3 buckets for static website hosting with proper permissions and endpoint access." },
      { title: "Auto Scaling Groups", description: "Set up EC2 auto scaling with S3 integration for elastic, resilient compute capacity." },
    ],
    architecture: {
      description: "The static hosting lab follows a multi-step S3 configuration: bucket creation, static website hosting enablement, public access policy, index document setup, and endpoint verification. The auto scaling lab configures launch templates, scaling groups, and S3-backed policies across nine documented steps.",
      points: [
        { title: "S3 Static Website", description: "HTML/CSS assets served directly from S3 with a public website endpoint — no compute required." },
        { title: "EC2 Auto Scaling", description: "Scaling groups adjust EC2 capacity based on demand, integrated with S3 for storage-backed workloads." },
      ],
    },
    challenges: [
      {
        challenge: "S3 Bucket Policy Configuration",
        solution: "Static website hosting requires precise bucket policies for public read access while maintaining security best practices. Documented each configuration step to make the process reproducible.",
      },
      {
        challenge: "Auto Scaling Group Tuning",
        solution: "Worked through nine steps of scaling configuration — from launch template creation to policy attachment — building understanding of how AWS adjusts capacity in response to load.",
      },
    ],
    lessons: [
      "Static content belongs on S3, not EC2 — it is cheaper, faster, and more reliable.",
      "Auto scaling groups are the foundation of resilient AWS compute architecture.",
      "Step-by-step lab documentation creates a personal runbook for future deployments.",
    ],
    nextSlug: "container-detective",
    prevSlug: "terraform-ec2-infrastructure",
  },
  {
    slug: "container-detective",
    title: "Container Detective",
    category: "Cloud",
    year: "2024",
    role: "DevOps Engineer",
    timeline: "Group Lab — Docker Troubleshooting",
    impact: "Diagnosed port mapping misconfiguration",
    summary: "Docker debugging exercise involving a mystery Flask application where the container failed to serve traffic due to port mapping mismatches between Dockerfile EXPOSE, application bind port, and docker run -p flags.",
    techStack: [
      { name: "Docker", type: "Containerization" },
      { name: "Flask / Python", type: "Application" },
      { name: "Linux Networking", type: "Infrastructure" },
    ],
    overview: "A peer study lab presenting a deliberately misconfigured Docker setup. The mystery Flask app built successfully but failed at runtime because the Dockerfile exposed port 8080 while the application listened on port 5000, and the docker run command used incorrect port mapping syntax. The exercise trained systematic container debugging skills.",
    problemStatement: "Container failures often present cryptic symptoms — the image builds fine, the container starts, but nothing responds on the expected port. Without understanding the relationship between EXPOSE directives, application bind ports, and -p mapping flags, debugging these issues wastes significant time.",
    painPoints: [
      "docker build succeeds but docker run produces unreachable services.",
      "Confusion between container-internal ports and host-mapped ports.",
      "Incorrect docker run flag ordering and syntax.",
    ],
    goals: [
      { title: "Diagnose Port Mismatch", description: "Identify that EXPOSE 8080, app port 5000, and -p mapping must align for traffic to flow." },
      { title: "Correct Run Command", description: "Fix syntax from `docker run -d -p 8080:8080 --name mystery` to `docker run -d --name mystery -p 8080:5000 mystery-app`." },
    ],
    architecture: {
      description: "The mystery app is a minimal Flask service returning 'Mystery App Running!' on port 5000. The Dockerfile exposes 8080 and maps CMD to python app.py. The fix requires mapping host port 8080 to container port 5000 where Flask actually listens.",
      points: [
        { title: "Port Chain", description: "Host port → docker -p mapping → container port → application bind port. All four must align." },
        { title: "Build vs Run", description: "Successful docker build only validates the image layers — runtime networking is a separate concern verified at docker run time." },
      ],
    },
    challenges: [
      {
        challenge: "Misleading EXPOSE Directive",
        solution: "The Dockerfile declared EXPOSE 8080, suggesting the app listens there, but Flask defaulted to port 5000. Recognized that EXPOSE is documentation-only and does not change what port the application binds to.",
      },
      {
        challenge: "docker run Flag Order",
        solution: "Corrected the run command syntax to `docker run -d --name mystery -p 8080:5000 mystery-app`, mapping host 8080 to container 5000 where Flask actually listens.",
      },
    ],
    lessons: [
      "EXPOSE in a Dockerfile is metadata — it does not control which port the app binds to.",
      "Always verify the trifecta: app bind port, EXPOSE declaration, and -p host:container mapping.",
      "Systematic debugging beats random configuration changes every time.",
    ],
    nextSlug: "aws-codebuild-pipeline",
    prevSlug: "aws-static-hosting-autoscaling",
  },
  {
    slug: "aws-codebuild-pipeline",
    title: "AWS CodeBuild Pipeline",
    category: "Cloud",
    year: "2024",
    role: "DevOps Engineer",
    timeline: "Group Lab — AWS CI/CD",
    impact: "CodeBuild buildspec for static site artifacts",
    summary: "AWS CodeBuild project with a buildspec.yml pipeline that packages a static HTML/CSS website (Nebula landing page) as build artifacts for deployment.",
    techStack: [
      { name: "AWS CodeBuild", type: "CI/CD" },
      { name: "buildspec.yml", type: "Pipeline Config" },
      { name: "HTML / CSS", type: "Static Site" },
    ],
    overview: "A CodeBuild-focused lab configuring an AWS buildspec.yml pipeline for a static website project. The buildspec defines a build phase that echoes progress and packages all project files as deployment artifacts — the foundation for integrating with CodePipeline and S3/CloudFront deployment stages.",
    problemStatement: "AWS-native CI/CD requires understanding buildspec syntax, artifact definitions, and how CodeBuild integrates with the broader deployment pipeline. This lab exercise configured the build specification for a static site project.",
    painPoints: [
      "CodeBuild buildspec syntax differs from GitHub Actions workflow YAML.",
      "Artifact configuration must explicitly declare which files deploy downstream.",
      "Without a buildspec, CodeBuild has no instructions for what to execute.",
    ],
    goals: [
      { title: "buildspec.yml Configuration", description: "Define build phases and artifact output for a static HTML project." },
      { title: "Artifact Packaging", description: "Package all site files (`**/*`) as build artifacts for downstream deployment." },
    ],
    architecture: {
      description: "The buildspec.yml (version 0.2) defines a single build phase with echo commands and declares all files as artifacts. The static site is a responsive HTML/CSS landing page (Nebula) with hero, feature cards, stats, and footer sections.",
      points: [
        { title: "Build Phase", description: "Executes build commands in the CodeBuild environment — extensible to npm build, testing, or linting steps." },
        { title: "Artifact Output", description: "Files glob `**/*` captures the complete static site for S3 upload or CloudFront invalidation in a full pipeline." },
      ],
    },
    challenges: [
      {
        challenge: "Minimal buildspec Starting Point",
        solution: "Started with a foundational buildspec that validates the pipeline executes, then extended understanding of how additional phases (install, pre_build, post_build) slot into the CodeBuild lifecycle.",
      },
    ],
    lessons: [
      "CodeBuild buildspec phases map cleanly to CI pipeline stages in other platforms.",
      "Artifact definitions are the handoff point between build and deploy stages in AWS CodePipeline.",
      "Static sites are ideal first projects for learning cloud-native CI/CD.",
    ],
    nextSlug: "cloud-ci-pipeline",
    prevSlug: "container-detective",
  },
];

export const articlesData = [
  {
    slug: "github-actions-ci-python",
    title: "Building a GitHub Actions CI Pipeline for Python",
    date: "2024",
    readTime: "5 min read",
    summary: "Setting up automated checkout, Python 3.11, and pytest validation on every push — lessons from the Cloud CI lab project.",
  },
  {
    slug: "kubernetes-deployment-basics",
    title: "Kubernetes Deployments: Probes, Scaling & Rolling Updates",
    date: "2024",
    readTime: "6 min read",
    summary: "Deploying a Node.js app with readiness/liveness probes, replica scaling, and zero-downtime rolling updates using kubectl.",
  },
  {
    slug: "aws-migration-strategies",
    title: "AWS Migration: Lift-and-Shift vs Replatforming",
    date: "2024",
    readTime: "7 min read",
    summary: "Comparing EC2 rehost deployments against Elastic Beanstalk replatforming — trade-offs in control, complexity, and operations.",
  },
];
