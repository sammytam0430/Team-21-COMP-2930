# Konnect

## Project setup
At the root directory, run `npm install` for server side dependencies
```
npm install
```
Then go to `client` directory, run `npm install` for client side dependencies
```
cd client
npm install
```

### Compiles and hot-reloads for development
To run the server side server, go to the `root` directory and run 
```
npm start
```
To run the client side server, go to the `client` directory
```
cd client
```
and run 
```
npm run serve
```

### Database migration and seeding
```
cd server
knex migrate:latest
knex migrate:seed
```
add `npx` before `knex` if you are on Windows
```
npx knex migrate:latest
npx knex migrate:seed
```
