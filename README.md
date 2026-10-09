# Dockerized Calculator Web App

A calculator web application with a Node.js/Express backend and an HTML, CSS, and JavaScript frontend. Both components include Dockerfiles for containerized deployment.

## Features

- Addition, subtraction, multiplication, and division.
- Division-by-zero error handling.
- Browser-based interface styled with Bootstrap and custom CSS.
- Communication with the backend through HTTP POST requests.
- Separate Docker images for the frontend and backend.

## Technologies

| Component | Technologies |
|---|---|
| Frontend | HTML, CSS, JavaScript, Bootstrap |
| Backend | Node.js, Express |
| Frontend server | Nginx |
| Containerization | Docker |

## Project Structure

| Path | Description |
|---|---|
| `backend/backend.js` | Express server and arithmetic API routes. |
| `backend/package.json` | Backend dependencies and start command. |
| `backend/Dockerfile` | Backend Docker image configuration. |
| `frontend/index.html` | Calculator interface and API requests. |
| `frontend/style.css` | Custom interface styles. |
| `frontend/Dockerfile` | Frontend Docker image configuration using Nginx. |

## API Endpoints

All endpoints accept a JSON request containing numeric values for `num1` and `num2`.

| Method | Endpoint | Operation |
|---|---|---|
| POST | `/add` | Addition |
| POST | `/subtract` | Subtraction |
| POST | `/multiply` | Multiplication |
| POST | `/divide` | Division |

Example request:

```json
{
  "num1": 12,
  "num2": 4
}
```

Example response from `/divide`:

```json
{
  "result": 3
}
```

Division by zero returns HTTP status `400` with an error message.

## Run Locally

### Backend

From the repository root:

```bash
cd backend
npm install
npm start
```

The backend runs at `http://localhost:5000`.

### Frontend

Open `frontend/index.html` in a browser while the backend is running.

## Run with Docker

Run these commands from the repository root:

### Backend

```bash
docker build -t calculator-backend ./backend
docker run -d --name calculator-backend -p 5000:5000 calculator-backend
```

### Frontend

```bash
docker build -t calculator-frontend ./frontend
docker run -d --name calculator-frontend -p 3000:3000 calculator-frontend
```

Open `http://localhost:3000` in your browser.

## Configuration

The frontend currently sends requests to `http://localhost:5000`. For remote deployment, update the API URL in `frontend/index.html` to the backend's accessible address.

Bootstrap is loaded from a CDN and requires an internet connection for its styles.

## Purpose

This project demonstrates frontend–backend communication, a simple Express API, and containerization of a web application using Docker.
