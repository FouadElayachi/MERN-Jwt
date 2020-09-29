# Dropeditions
An application that implement authentification using JWT, and consulting data from an external API.

# Installation
- To install you should have node.js installed. If it is not the case you can download it from: https://nodejs.org.
- clone the repository. And access it.

# Usage

## Backend

- Create an account on Cloud MongoDB vi the link https://cloud.mongodb.com/.
- Move to the server folder `cd server`.
- Create a environement file: `touch .env` and create on it the following constants:
```
MONGOURI= //URI given by cloud mongodb.
JWT_SECRET= //A random string for JWT token.
```
- Run the command `npm install` to install depencies.
- Add the .babelrc file to support ES6 syntax and copy the following code on it:
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
- Run the command `npm start`to start the server. if all went well, you should have the following line on the terminal:
```
server is running on 5000
connected to mongo
```

## Frontend

- Create an account on the marketstack in order to use the API following the link: https://marketstack.com/.
- Move to the client directory by writing the command `cd client`.
- Install dependencies using the commande `npm install`.
- Create the environnement file `touch .env`and make sure the you fill the access key field from your marketstack account.
```
REACT_APP_ACCESS_KEY= // Your accesss key
REACT_APP_SYMBOLS=MSFT,AMZN,GOOGL
REACT_APP_EXCHANGE=XNAS
````
- Run the client by typing the following command line: `npm start`.

# And enjoy testing the application :)
