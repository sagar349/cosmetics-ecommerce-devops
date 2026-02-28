# Cosmetics E-Commerce DevOps Project

This project is a production-style DevOps implementation of a microservices-based e-commerce platform for cosmetic products.

## Objective

To design, containerize, and deploy a scalable e-commerce application using modern DevOps tools and cloud infrastructure.

## Tech Stack (Planned)

- Node.js (Backend Services)
- PostgreSQL (Database)
- Docker
- GitHub Actions (CI/CD)
- Terraform (Infrastructure as Code)
- AWS
- Kubernetes (Future Phase)

## Project Phases

1. Application Development
2. Containerization
3. CI/CD Pipeline
4. Infrastructure Provisioning
5. Kubernetes Deployment

---

# Cosmetics E-Commerce DevOps Project

A production-style microservices-based e-commerce platform demonstrating real-world DevOps practices.

## 🎯 Goal

Build, containerize, and structure a scalable cosmetics e-commerce application with multiple microservices.

## 🏗 Microservices

| Service Name      | Port | Description                        |
|------------------|------|------------------------------------|
| Product Service   | 5000 | Manages product catalog            |
| Cart Service      | 5001 | Manages user carts (add/remove)   |
| User Service      | 5002 | Manages users (register/list)     |

## 🚀 Project Structure
app/
 ├─ product-service/
 │    ├─ index.js
 │    ├─ package.json
 │    ├─ .env
 │    ├─ Dockerfile
 │    └─ README.md
 ├─ cart-service/
 │    ├─ index.js
 │    ├─ package.json
 │    ├─ .env
 │    ├─ Dockerfile
 │    └─ README.md
 └─ user-service/
      ├─ index.js
      ├─ package.json
      ├─ .env
      ├─ Dockerfile
      └─ README.md

docker/                    # Optional shared Docker scripts
terraform/                 # Terraform IaC files
docs/                      # Documentation (optional)
.github/workflows/         # GitHub Actions CI/CD pipelines
k8s/                       # Kubernetes manifests for all services

## 📌 Features

- Microservices architecture (Node.js REST APIs)  
- Environment-based configuration (`.env`)  
- Service-specific Dockerfiles  
- Kubernetes manifests ready for deployment  
- Terraform infrastructure examples (EC2, Jenkins, EKS)  
- CI/CD pipelines using GitHub Actions and Jenkins  
- GitOps via ArgoCD for automated deployment  
- End-to-end DevOps lifecycle demonstrated 

## ⚡ CI/CD Pipeline

- **GitHub Actions Workflow**:
  - Installs dependencies, runs tests (placeholder), builds Docker images, and pushes to DockerHub.  
- **Jenkins Pipeline**:
  - Declarative pipeline building all 3 microservices, pushing Docker images, and deploying to Kubernetes.  
- **Deployment Stage**:
  - Applies all Kubernetes manifests in `k8s/` folder.  
  - Fully automated continuous deployment ready for recruiters to see.

  ## 🔄 GitOps / ArgoCD

- Kubernetes manifests for all services are in `k8s/`  
- ArgoCD apps in `argocd/` watch this repo and deploy automatically  
- Demonstrates automated GitOps-style deployment  
