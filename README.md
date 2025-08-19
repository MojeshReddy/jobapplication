🚀 Job Posting Platform (MERN + DevOps)

A minimal Job Posting Platform built with the MERN stack and deployed with DevOps best practices.
This project simulates a Full-Stack + DevOps Engineer role by combining application development with modern CI/CD, containerization, and cloud deployment.

✨ Features
👨‍💼 Admin

Post a job (title, company, location, salary, description)

👩‍💻 User

Register/Login

Browse available jobs

Apply for jobs with resume link + note

View "My Applications" page

🏗️ Tech Stack

Frontend: React.js (Hosted on Netlify)

Backend: Node.js + Express (Deployed on Render)

Database: MongoDB Atlas (Cloud-hosted NoSQL DB)

Containerization: Docker & Docker Compose

CI/CD Pipeline: GitHub Actions (Build → Test → Push → Deploy)

Secrets Management: .env files (local), GitHub Secrets (CI/CD)

📂 Project Structure
job-posting-platform/
│
├── backend/                 # Node.js + Express API
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── frontend/                # React.js app
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml       # Orchestration for frontend + backend
├── .github/workflows/       # GitHub Actions CI/CD workflows
└── README.md

⚙️ DevOps Implementation
1️⃣ Dockerization

Separate Dockerfiles for frontend & backend

docker-compose.yml to orchestrate all services

Environment variables (.env) for configuration

Images pushed to Docker Hub

2️⃣ CI/CD Pipeline

Implemented via GitHub Actions

On every push:

Run tests

Build Docker images

Push to Docker Hub

Deploy to Render (Backend) & Netlify (Frontend)

3️⃣ Cloud Deployment

Frontend: Netlify (Continuous Deployment from GitHub)

Backend: Render (Dockerized deployment)

Database: MongoDB Atlas (Free tier, secured access)

4️⃣ Environment & Secrets

Local: .env files

Production: GitHub Secrets + Render/Netlify Environment Config

5️⃣ Infrastructure as Code (Bonus)

Terraform planned for future to provision AWS EC2 + networking

🚀 Getting Started
🔹 Prerequisites

Node.js (>=16)

Docker & Docker Compose

MongoDB Atlas connection string

🔹 Local Development

Clone repo

git clone https://github.com/MojeshReddy/jobapplication.git
cd job-posting-platform


Create .env files inside backend/ and frontend/ with proper values:

# Example for backend/.env
PORT=5000
MONGO_URI=
JWT_SECRET=your_secret


Run with Docker Compose

docker-compose up --build


Access app:

Frontend → http://localhost:3000

Backend → http://localhost:5000

🔄 CI/CD Pipeline (GitHub Actions)

Trigger: On push to main branch

Steps:

Checkout code

Install dependencies & run tests

Build Docker images

Push to Docker Hub

Deploy backend to Render, frontend to Netlify

✅ Ensures zero manual steps from code → production deployment

🌐 Live Demo

Frontend (Netlify): https://forentend.netlify.app/

Backend (Render): https://backend-1wa9.onrender.com

Add E2E testing with Cypress

Role-based access (Admin vs User dashboards)

Deploy using AWS ECS + Terraform for production-grade infra

Kubernetes (EKS) for orchestration

🤝 Contribution

Fork the repo

Create a new branch (feature/xyz)

Commit changes

Push branch & open a PR

