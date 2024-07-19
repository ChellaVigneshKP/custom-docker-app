# Custom Docker App

This repository contains a sample web application deployed using Docker containers, with Docker images created from scratch. The project includes a backend service using Flask, a frontend service using React, and a PostgreSQL database.

## Author
**Name:** [Chella Vignesh K P (G23AI2083)](https://github.com/ChellaVigneshKP)

**Roll Number:** G23AI2083

## Table of Contents
1. [Introduction](#introduction)
2. [Application Functionality](#application-functionality)
3. [Setup and Installation](#setup-and-installation)
    - [Clone the Repository](#1-clone-the-repository)
    - [Create Base Ubuntu Root Filesystem](#2-create-base-ubuntu-root-filesystem)
    - [Build and Run Docker Containers](#3-build-and-run-docker-containers)
4. [Docker Images Creation](#docker-images-creation)
    - [Backend Dockerfile](#backend-dockerfile)
    - [Frontend Dockerfile](#frontend-dockerfile)
    - [Database Dockerfile](#database-dockerfile)
    - [entrypoint.sh](#entrypointsh)
5. [Docker-Compose Configuration](#docker-compose-configuration)
6. [Running the Application](#running-the-application)
7. [Project Structure](#project-structure)
8. [References](#references)

## Introduction
This project demonstrates the deployment of a web application using custom Docker images created from scratch. The backend service is built with Flask, the frontend with React, and PostgreSQL is used as the database. The Docker images are built from scratch without using any existing Docker images, ensuring a tailored and lightweight environment.

## Application Functionality
- **Backend (Flask):** Provides a RESTful API for the application.
- **Frontend (React):** Offers a user interface to interact with the backend services.
- **Database (PostgreSQL):** Stores application data.

## Steps Followed
To set up and run the application, follow these steps:

### 1. Start Docker Enginer on Windows/ any Os
### 2. Create Base Ubuntu Root Filesystem
```bash
docker run --name ubuntu-rootfs -it ubuntu:24.04 bash
apt-get update
apt-get install -y debootstrap
debootstrap --variant=minbase focal /rootfs http://archive.ubuntu.com/ubuntu/
tar -C /rootfs -czf /rootfs.tar.gz .
exit
docker cp ubuntu-rootfs:/rootfs.tar.gz .
```
### 3. Placed rootfs.tar.gz in all modules of code
### 4. Build and Run Docker Containers

