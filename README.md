# Twitch+ | Personalized Twitch Resource Recommendation Platform

Twitch+ is a full-stack recommendation platform for Twitch content discovery, built with React and Spring Boot. It supports searching Twitch streams, videos, and clips, and provides personalized ranking based on user preferences.

## Overview

This project is organized as a single repository with separate frontend and backend modules:
- `twitch-fe`: React frontend
- `twitch-be`: Spring Boot backend

## Highlights

- Built a full-stack application using Java, Spring Boot, React, and MySQL
- Implemented search and personalized ranking for Twitch resources (streams, videos, clips)
- Developed RESTful APIs and integrated Twitch APIs using OpenFeign
- Implemented authentication and authorization with Spring Security
- Designed relational persistence for users and favorites using Spring Data JDBC + MySQL (AWS RDS)
- Containerized and deployed with Docker and AWS App Runner

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

### Infra / Deployment
- Docker
- AWS App Runner
- AWS RDS

## Features

- Twitch resource search (streams, videos, clips)
- Personalized ranking / recommendation
- User authentication and authorization
- Favorites management
- Frontend-backend integration via REST APIs

## Project Structure

```text
.
├─ twitch-fe/   # React frontend project
├─ twitch-be/   # Spring Boot backend project
├─ .gitignore
└─ README.md
```

## Run Locally

### Frontend

```bash
cd twitch-fe
npm install
npm start
```

Frontend default URL: `http://localhost:3000`

### Backend (Gradle)

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

## Configuration

### Frontend
- The frontend uses a proxy configured in `twitch-fe/package.json`
- Update the proxy or API base URL if your backend runs on a different address

### Backend
Configure Spring Boot application settings in:
- `twitch-be/src/main/resources/application.properties`
- `twitch-be/src/main/resources/application.yml`

Typical local configuration includes database connection settings and security / OAuth settings.

## Deployment

- Dockerized application
- MySQL hosted on AWS RDS
- Deployed on AWS App Runner
