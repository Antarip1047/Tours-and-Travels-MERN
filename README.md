# Tours-and-Travels-MERN
A comprehensive web application built on the MERN stack for easy booking and customised travel plans. 
## Overview
This project is a Tours and Travel Management System website built using the MERN stack (MongoDB, Express.js, React, and Node.js). The system allows users to browse, book, and manage tours and travel packages.

## Features
- User Authentication: Secure login and registration system.
- Tour Browsing: View and search for available tours and travel packages.
- Booking System: Book tours and manage reservations.
- Admin Dashboard: Manage tours, bookings, and user information.
- Responsive Design: User-friendly interface accessible on various devices.
## Installation
### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB
### Clone the Repository
git clone https://github.com/Antarip1047/Tours-and-Travel-MERN.git
> cd Tours-and-Travel-MERN
### Install Dependencies
#### Backend
```
cd backend
npm install
```
#### Frontend
```
cd ../frontend
npm install
```
## Running the Application
- Start MongoDB
> [!NOTE]
> Ensure MongoDB is running on your system. You can start MongoDB using the following command:

### Start the Backend Server
```
cd backend
npm start
```
### Start the Frontend Server
> Open a new terminal window and run:
```
- cd frontend
- npm start
```
### Access the Application
- Open your browser and navigate to http://localhost:3000 to access the Tours and Travel Management System.

## Project Structure

Tours-and-Travel-MERN/
1. backend/             # Backend folder containing server-side code
     - models/          # Mongoose models
     - routes/          # Express routes
     - controllers/     # Controllers for handling requests
     - config/          # Configuration files
     - middleware/      # Middleware functions
     - server.js        # Entry point for the backend server
     - package.json     # Backend dependencies and scripts
2. frontend/            # Frontend folder containing client-side code
     - public/          # Public assets
     - src/             # React application source code
          - components/  # Reusable components
          - pages/       # Page components
          - services/    # Services for API calls
          - App.js       # Main application component
          - index.js     # Entry point for the React application
     - package.json     # Frontend dependencies and scripts
3. README.md            # Project documentation
4. gitignore           # Git ignore file

## Acknowledgments
- MongoDB
- Express.js
- React
- Node.js
