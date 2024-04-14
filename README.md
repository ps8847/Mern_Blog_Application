# MERN Blog

## Overview

The MERN Blog is a full-stack open-source blogging application built with MongoDB, Express, React, and Node.js (MERN stack). It provides a platform for users to create, read, update, and delete blog posts.

## Features

- **Full Stack Application**: Utilizes the MERN stack for both frontend and backend development.
- **CRUD Operations**: Allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts.
- **Authentication and Authorization**: Implements user authentication and authorization using JSON Web Tokens (JWT).
- **Password Reset**: Provides functionality for users to reset their passwords via email.
- **SMTP Configuration**: Supports SMTP configuration for email services.

## How to Use

To use the MERN Blog application, follow these steps:

1. **Clone the Project**: Clone or download the project repository to your local machine.

2. **Frontend Setup**:
   - Navigate to the `Frontend/` directory.
   - Run the following command to install dependencies and start the frontend server:
     ```bash
     npm install
     npm start
     ```
   - The frontend server will start, and you can access the application in your web browser.

3. **Backend Setup**:
   - Create a folder named `Config/` in the `Backend/` directory.
   - Inside the `Config/` folder, create a file named `config.env`.
   - Fill in the following parameters in the `config.env` file:
     ```plaintext
     NODE_ENV=development
     PORT=5000
     URI=http://localhost:3000
     MONGO_URI=
     JWT_SECRET_KEY=
     JWT_EXPIRE=60m
     RESET_PASSWORD_EXPIRE=3600000
     SMTP_HOST=
     SMTP_PORT=
     EMAIL_USERNAME=
     EMAIL_PASS=
     ```
   - Replace the placeholders (`MONGO_URI`, `JWT_SECRET_KEY`, etc.) with your actual configuration values.

4. **Start Backend Server**:
   - Navigate to the `Backend/` directory.
   - Run the following command to install dependencies and start the backend server:
     ```bash
     npm install
     npm start
     ```

5. **Access the Application**:
   - Once both frontend and backend servers are running, you can access the blogging application in your web browser.
   - If you encounter any difficulties, feel free to reach out via LinkedIn.

## Support

For any inquiries or assistance regarding the MERN Blog application, feel free to reach out via [LinkedIn](<your_linkedin_profile>).

## License

This project is licensed under the [MIT License](LICENSE).
