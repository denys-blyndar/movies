### About

<b>Movies Storage</b>

- Database: MongoDB<br>
- Server: Node.js<br>
- Client: React.js<br>
- State management: Redux.js<br>
- Compiler: Babel<br>
- Bundler: Webpak<br>
- Pattern management: ESLint<br>

### Prerequisites

- Windows 10 OS
- MongoDB - [Download & Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/)

In the command prompt run the following commands: 

```sh
mkdir -p /data/db
```

to create a data directory if you don't have one

```sh
mongod
```

to run MongoDB

In the project directory run the following scripts:

```sh
npm install
```

to install dependencies

```sh
npm run start
```

to start the API

```sh
npm run dev
```

to start the webpack dev server

The browser opens up http://localhost:8080 to view the application. To start interacting with the application click `Add movie` from the header to add content to the home page. You can also make a search according to such criteria as title, year, format, and stars. 