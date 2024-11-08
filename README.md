
# Agnos Socket.IO Server

This repository contains the Socket.IO server for the Agnos Home Work application. It handles real-time data synchronization, allowing users to submit patient data and staff to view updates instantly.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Folder Structure](#folder-structure)
- [Code Flow Overview](#code-flow-overview)
- [License](#license)

---

## Project Overview

The Agnos Socket.IO server facilitates real-time communication between clients, providing a smooth experience for applications that need live data updates, such as patient data entry and staff viewing.

## Features

- **Real-Time Synchronization**: Broadcasts data to all connected clients instantly.
- **Event-Driven**: Listens for custom events like `submitPatientData` and `patientFormUpdate`.
- **CORS Support**: Allows cross-origin requests for flexibility during development.

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web server framework
- **Socket.IO** - Real-time bidirectional communication
- **CORS** - Middleware for handling cross-origin requests

## Installation and Setup

1. **Clone the Repository**:
   - **Using SSH**:
     ```bash
     git clone git@github.com:FIRSTHEP/agnos-socket-io.git
     ```
   - **Using HTTPS**:
     ```bash
     git clone https://github.com/FIRSTHEP/agnos-socket-io.git
     ```

2. **Navigate to the Project Directory**  
   ```bash
   cd agnos-socket-io
   ```

3. **Install Dependencies**  
   ```bash
   npm install
   ```

4. **Run the Server**  
   ```bash
   node server.js
   ```
   - The server will start on the port defined in `PORT` (default is `4000`).

## Folder Structure

This is the folder structure of the **agnos-socket-io** project:

```
agnos-socket-io/
├── node_modules/              # Installed dependencies
├── .env                       # Environment variables (e.g., PORT, CORS_ORIGIN)
├── .gitignore                 # Git ignore rules
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Exact dependency versions
├── README.md                  # Documentation file with setup instructions
└── server.js                  # Main server file with Socket.IO and Express setup
```

**Explanation:**

- **node_modules/**: Contains all installed dependencies for the project. This folder is generated by npm and should not be modified directly.
- **.env**: Holds environment-specific variables such as the server port and CORS origin. **Ensure this file is not committed to version control** to protect sensitive information.
- **.gitignore**: Specifies which files and folders Git should ignore, such as `node_modules` and `.env`.
- **package.json**: Lists project dependencies, scripts, and metadata for npm. Common dependencies include `express`, `socket.io`, `cors`, and `dotenv`.
- **package-lock.json**: Automatically generated file that locks the versions of dependencies for consistent installs across environments.
- **README.md**: Provides an overview of the project, setup instructions, and necessary details for developers or users.
- **server.js**: The main entry point for the server. This file sets up Express, Socket.IO, and CORS, and manages WebSocket connections by emitting and receiving events.

## Code Flow Overview

This is a brief description of how the `server.js` code functions:

1. **Server Setup**:
   - Imports required packages and configures environment variables with `dotenv`.
   - Initializes an Express app and HTTP server.

2. **CORS Configuration**:
   - Configures CORS to allow all origins and credentials.

3. **Socket.IO Configuration**:
   - Initializes a Socket.IO server with CORS support for real-time communication.

4. **Routes**:
   - Defines a root route (`/`) to check server status. Responds with the host and port.

5. **Socket.IO Events**:
   - **Connection**: Logs when a user connects.
   - **submitPatientData**: Listens for `submitPatientData` event from clients and broadcasts the `patientFormUpdate` event with the received data.
   - **Disconnect**: Logs when a user disconnects.

6. **Server Start**:
   - Starts the server and listens on the specified port, logging that the Socket.IO server is running.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
