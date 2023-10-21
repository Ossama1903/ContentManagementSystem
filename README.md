# CMS (Content Management System)

## Description
CMS is a versatile and user-friendly content management system designed to streamline content creation, management, and publishing for your website or application. It offers a wide range of features to simplify the content workflow and enhance your online presence.

## Installation

To get started with CMS, follow these steps:

1. Clone the Git repository:


2. Install dependencies for the client and server separately:

- For the client directory:
  ```
  cd cms/client
  npm install
  ```

- For the server directory:
  ```
  cd cms/server
  npm install
  ```

3. Start the client and server:

- In the client directory, run:
  ```
  npm start
  ```

- In the server directory, run:
  ```
  npm run server
  ```

Now, CMS is up and running, and you can begin managing your content.

Please note that the application is connected to the developer's personal MongoDB cluster by default. To update the database connection, edit the connection string within the `.env` file located in the server directory.