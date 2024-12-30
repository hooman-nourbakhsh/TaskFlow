# TaskFlow | Todo App

TaskFlow is a comprehensive Todo application designed for managing tasks efficiently. Inspired by tools like Trello, it allows users to create, update, categorize, and manage tasks through a structured and user-friendly interface.

## Features

- **Authentication**: Secure login and registration system using `NextAuth`.
- **Task Management**: Add, update, and categorize tasks into sections: Todo, In Progress, Review, and Done.
- **Profile Management**: Update user profile information securely.
- **Reusable Components**: Optimized for code reusability using modular components like `RadioButton`, `Task`, and `ProfileForm`.

## Technologies Used

- **Next.js**: Framework for building server-rendered React applications.
- **MongoDB**: Database for storing user and task data.
- **NextAuth**: Authentication and session management.
- **React Icons**: For visually appealing and accessible icons.
- **React Toastify**: Notifications for user actions.
- **CSS**: Custom styles for an interactive UI.

## Demo

Explore the live demo: [TaskFlow Demo](https://task-flow-lime.vercel.app/)


## Installation

1. Clone the repository:
   ```plaintext
   git clone https://github.com/matador7495/TaskFlow.git
   ```
2. Navigate to the project directory:
   ```plaintext
   cd taskflow
   ```
3. Install dependencies:
   ```plaintext
   npm install
   ```
4. Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   MONGO_URI=your_mongo_connection_string
   ```
5. Start the development server:
   ```plaintext
   npm run dev
   ```
6. Open your browser and visit `http://localhost:3000`.

## Usage

- **Add Tasks**: Navigate to the "Add Todo" section to create a new task.
- **Manage Tasks**: View and update task statuses on the homepage.
- **Profile Update**: Edit your profile information, including name and last name, in the profile section.
- **Logout**: Use the logout button in the header to end your session.

## API Endpoints

### Authentication
- **POST /api/auth/signup**: Registers a new user.
- **POST /api/auth/signin**: Logs in an existing user.

### Todos
- **POST /api/todos**: Creates a new todo.
- **GET /api/todos**: Retrieves sorted todos by status.
- **PATCH /api/todos**: Updates the status of an existing todo.

### Profile
- **GET /api/profile**: Retrieves the profile information of the authenticated user.
- **POST /api/profile**: Updates the profile information of the authenticated user.

## License

This project is open-source and available under the [MIT License](./LICENSE).

## Acknowledgments

I would like to thank the open-source community and contributors who provide the tools and libraries that make projects like this possible. Special thanks to the teams behind Next.js, MongoDB, Moment.js, and Vercel for their incredible work and support in making development faster and more efficient.