# Mental Health Support Web App

A full-stack web application designed to provide support for individuals dealing with depression. The platform allows users to track their mood, share supportive posts, and connect with others in a safe and positive environment.

## Features

- **User Authentication**: Users can sign up, log in, and securely manage their profiles.
- **Mood Tracker**: Users can log their mood daily and visualize trends over time.
- **Social Feed**: A space for users to share positive affirmations, thoughts, and experiences with the community.
- **Private Messaging**: Real-time chat and private messaging to encourage one-on-one support.
- **Mental Health Resources**: Access to over 20 resources such as hotlines, professional help, and self-care tips.

## Demo

You can see the live version of the app here: [Insert your live app URL here]

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB (hosted on MongoDB Atlas)
- **Real-time Chat**: Socket.io
- **Authentication**: JWT-based authentication

## Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- MongoDB Atlas account (for database hosting)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/mental-health-support-web-app.git
    cd mental-health-support-web-app
    ```

2. **Install dependencies:**

    - For the backend:

      ```bash
      cd backend
      npm install
      ```

    - For the frontend:

      ```bash
      cd frontend
      npm install
      ```

3. **Set up environment variables:**

    Create a `.env` file in both the backend and frontend directories and add the necessary environment variables (e.g., MongoDB URI, JWT secret, etc.).

    Example for `backend/.env`:

    ```env
    MONGO_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret
    ```

    Example for `frontend/.env`:

    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

4. **Start the application:**

    - For the backend:

      ```bash
      cd backend
      npm start
      ```

    - For the frontend:

      ```bash
      cd frontend
      npm start
      ```

    The app should now be running on `http://localhost:3000` (frontend) and `http://localhost:4000` (backend).

## Contributing

If you’d like to contribute to the project, feel free to fork the repository, create a new branch, and submit a pull request. Here are some ways you can contribute:

- **Bug fixes**: Report or fix bugs you encounter.
- **New features**: Suggest and implement new features to improve the app.
- **UI/UX improvements**: Help enhance the design for a better user experience.

## License

This project is licensed under the MIT License – see the LICENSE file for details.

## Acknowledgments

- Thanks to React and Node.js for providing the core technologies that power this project.
- Special thanks to the mental health community for inspiring the creation of this app to provide support.