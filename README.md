# Chat-App-Sockets

A real-time chat application built with Node.js and Socket.IO, deployed on Heroku. This application allows multiple users to communicate seamlessly through a web interface with message history support.

![Chat App Screenshot](https://github.com/lokashrinav/Chat-App-Sockets/blob/main/public/screenshot.png?raw=true)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Real-Time Communication:** Instant messaging between multiple users.
- **Message History:** View previous messages upon connecting.
- **Responsive Design:** Accessible on both desktop and mobile devices.
- **Secure Connection:** Deployed with HTTPS on Heroku.
- **Scalable Architecture:** Supports multiple concurrent users.

## Technologies Used

- **[Node.js](https://nodejs.org/):** JavaScript runtime environment.
- **[Express.js](https://expressjs.com/):** Web framework for Node.js.
- **[Socket.IO](https://socket.io/):** Enables real-time, bidirectional communication.
- **[Heroku](https://www.heroku.com/):** Cloud platform for deployment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js and npm:** Install [Node.js](https://nodejs.org/) (which includes npm) on your machine.
- **Git:** Install [Git](https://git-scm.com/downloads) for version control.
- **Heroku Account:** Sign up for a free account at [Heroku](https://signup.heroku.com/).
- **Heroku CLI:** Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:lokashrinav/Chat-App-Sockets.git
   ```
   
2. **Navigate to the Project Directory:**

   ```bash
   cd Chat-App-Sockets
   ```

3. **Install Dependencies:**

   Ensure you're in the project root directory and run:

   ```bash
   npm install
   ```

   This command installs all required libraries listed in `package.json`.

## Usage

To run the application locally:

1. **Start the Server:**

   ```bash
   npm start
   ```

2. **Access the Application:**

   Open your browser and navigate to `http://localhost:3000`.

3. **Interact with the Chat:**

   - Open multiple browser tabs or use different devices on the same network.
   - Send messages through the chat interface and observe real-time updates.

## Project Structure

```Chat-App-Sockets/
├── public/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── Procfile
├── package.json
├── server.js
└── README.md
```

### Directory and File Descriptions

- **public/**: Contains static files served to the client.
  - **index.html**: The main HTML file.
  - **script.js**: Client-side JavaScript for handling Socket.IO events.
  - **styles.css**: Stylesheet for the chat interface.
- **Procfile**: Specifies the command to run the server on Heroku.
- **package.json**: Lists project dependencies and scripts.
- **server.js**: Server-side application code.
- **README.md**: Project documentation.


## License

This project is licensed under the MIT License.
