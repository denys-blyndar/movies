# Movies Storage

A full-stack movie management application that lets users add, edit, delete, and search for movies.

## Features

- Add, edit, delete movies
- Search movies by title, year, format, and stars
- Responsive UI

## Technologies Used

- **Database**: MongoDB
- **Backend**: Node.js (Express.js)
- **Frontend**: React.js
- **State Management**: Redux.js
- **Compiler**: Babel
- **Bundler**: Webpack
- **Linter**: ESLint

## Prerequisites

Before running the project, ensure you have the following installed:

- **MongoDB**: [Download & Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/)

## Setup

### MongoDB

1. Create a MongoDB data directory (if not existing):
   ```sh
   mkdir -p /data/db
   ```
2. Start MongoDB:
   ```sh
   mongod
   ```

### .env Setup

1. Create a `.env` file in the root of the project with the following content:
   ```env
   REACT_APP_API_URL=http://localhost:3000
   PORT=3000
   DB_URI=mongodb://localhost:27017/movies
   ```

### Install Dependencies

In the project directory, run:

```sh
npm install
```

### Running the Application

Start the Backend (API)

```sh
npm run start
```

Start the Frontend (Webpack Dev Server)

```sh
npm run dev
```

Open http://localhost:8080 to view the application.

### Usage

- To add a movie: Click Add Movie in the header.
- Search movies by title, year, format, or stars.
- Edit or delete existing movies.
