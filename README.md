# Twitch+ | Personalized Twitch Resource Recommendation Platform

Twitch+ is a full-stack Twitch resource recommendation platform with a React frontend (`twitch-fe`) and a Spring Boot backend (`twitch-be`).
It supports searching and personalized ranking for Twitch streams, videos, and clips.

## What This Project Is

- A full-stack personalized recommendation platform for Twitch content discovery
- Supports searching Twitch resources such as streams, videos, and clips
- Provides backend APIs, user authentication, and favorites management
- Organized as a single repository with separate frontend and backend modules

## What I Worked On

- Built a full-stack recommendation system using Java, Spring Boot, React, and MySQL
- Implemented search and personalized ranking for Twitch streams, videos, and clips
- Developed RESTful backend APIs with Spring Boot and integrated Twitch APIs using OpenFeign
- Implemented authentication and authorization with Spring Security
- Designed relational persistence for users and favorites using Spring Data JDBC and MySQL (AWS RDS)
- Structured the project as a single repo (`twitch-fe` + `twitch-be`) for local development and deployment
- Containerized and deployed the application using Docker and AWS App Runner

## Tech Stack

### Frontend (`twitch-fe`)
- React
- Create React App (`react-scripts`)
- Ant Design (`antd`)
- JavaScript

### Backend (`twitch-be`)
- Java 21
- Spring Boot 3
- Spring Security
- Spring Web
- Spring Data JDBC
- OpenFeign
- Gradle
- MySQL (AWS RDS)

### Deployment / Infra
- Docker
- AWS App Runner
- AWS RDS

## Features

- Search Twitch resources (streams, videos, and clips)
- Personalized ranking / recommendation flow
- User authentication and authorization
- Favorites management with relational persistence
- Frontend-backend integration through REST APIs

## Project Structure

```text
.
├─ twitch-fe/   # React frontend project
├─ twitch-be/   # Spring Boot backend project
├─ .gitignore
└─ README.md
```

## How To Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/twitch-plus.git
cd twitchfe
```

### 2. Run the frontend

```bash
cd twitch-fe
npm install
npm start
```

Frontend default URL: `http://localhost:3000`

### 3. Run the backend (Gradle)

Windows:

```bash
cd twitch-be
.\gradlew.bat bootRun
```

macOS / Linux:

```bash
cd twitch-be
./gradlew bootRun
```

Backend default URL: `http://localhost:8080`

## Configuration Notes

### Frontend

- The frontend currently uses a proxy configured in `twitch-fe/package.json`
- Update the proxy or API base URL if your backend runs on a different address

### Backend

Configure Spring Boot application settings in:

- `twitch-be/src/main/resources/application.properties`
- `twitch-be/src/main/resources/application.yml`

Typical local configuration includes:

- database URL
- database username / password
- security / OAuth settings (if enabled)

## Deployment

- Containerized with Docker
- Backend database hosted on AWS RDS (MySQL)
- Application deployed on AWS App Runner

## Design Notes

- Backend uses layered structure (controller / service / repository) for maintainability
- Backend integrates external Twitch APIs through OpenFeign
- Frontend and backend are separated for clearer responsibilities and easier deployment changes
- This repo is structured to be easy to demo, extend, and present in interviews

## GitHub Upload (First Time)

Run these commands in the repository root (`twitchfe`):

```powershell
git init
git branch -M main
git add .
git commit -m "init: add twitch-fe and twitch-be"
git remote add origin https://github.com/<your-username>/twitch-plus.git
git push -u origin main
```

## Notes

- `VS Code` and `IntelliJ` are development tools only; GitHub upload is handled by Git
- Do not commit secrets such as database passwords, tokens, or private keys

