# E-commerce cakesShop_frontend for user

## Description

The E-commerce cakesShop_frontend project is a boilerplate codebase designed to help you kickstart the front end development of an E-commerce cakes shop application. It provides a solid foundation for implementing basic front end tasks related to buying cake products.

## Features

* User registration and login
* Authentication via JWT
* Email confirmation
* Components for categories, undercategries, products, carts, cartItems


## Technologies/libraries used

 * Vite
 * React
 * React-bootstrap
 * React-router-dom
 * react-icons
 * Redux Toolkit
 * TypeScript
 * CSS
 
 


                                   
### Installing

```
git clone https://github.com/EsterAbrahamyan/full-ecommerce-front-end.git
npm install

```

## Getting Started


* Start the application
```
npm run dev

```
* Register in the "Register" page with firstname,lastname, email, and password 
* If successful, you should get a verification email
* Email link should look like this - http://localhost:6005/users/verify/token
* Opening the link will change your username confirmed field to true and show confirmed message in the response
* Login in the "Login" page with the same email and password
* If all is correct you can you'll move to the "User" page.
* Choose your prefer product, add it in your cart
* Make your order










# E-commerce cakesShop_frontend for admin

## Description

The Admin Front End in the E-commerce cakesShop application provides an interface for authorized admin users to manage the products, categories, and undercategories. It offers a range of features to streamline administrative tasks and ensure efficient management of the e-commerce shop.

## Features

* User Authorization and Authentication
* Admin Dashboard
* Product Management
* Category and Undercategory Management
* CRUD operations, ensuring synchronization between the front end and back end



## Technologies/libraries used

 * React
 * React-router-dom
 * MUI
 * Antd Design
 * CSS
 
 

                                   
### Installing

```
git clone https://github.com/EsterAbrahamyan/AdminPage-front-end.git
npm install

```

## Getting Started

* Start the application
```
npm start

```
* Register in the "Register" page with firstname,lastname, email, and password 
* If successful, you should get a verification email
* Email link should look like this - http://localhost:6005/users/verify/token
* Opening the link will change your username confirmed field to true and show confirmed message in the response
* Login in the "Login" page with the same email and password
* If the user is "Admin", you will be redirected to the "Admin" page and perform actions that are exclusive to admin rights.







# E-commerce cakesShop_backend

## Description

This project was built to help you start E-commerce cakesShop_backend with a boilerplate which is fully ready for most of the basic back end tasks such as authorization, authentication, email confirmation and CRUD

## Features

* User registration and login
* Authentication via JWT
* Email confirmation
* CRUD for categories, undercategries, products, carts, cartItems posts
* PostgreSQL database
* Seeding

## Technologies/libraries used

 * NodeJs
 * Express
 * PostgreSQL
 * Sequelize ORM
 * Nodemailer
 * Multer

## Project Structure
```
├── config
│   └── config.json                          # Configuration file for the database connection
├── controllers
│   ├── userController.js                    # Handles CRUD operations for user resources
│   ├── categoryController.js                # Handles CRUD operations for category resources
│   ├── underCategoryController.js           # Handles CRUD operations for underCategory resources
│   ├── productController.js                 # Handles CRUD operations for product resources
│   ├── cartController.js                    # Handles CRUD operations for cart resources
│   ├── cartItemsController.js               # Handles CRUD operations for cartItems resources
├── middleware
│   ├── jwtAuthenticate.js                   # Middleware for verifying JWT tokens and user authentication
│   ├── jwtGenerate.js                       # Creating a JWT token
│   └── uploads.js                           # Middleware for Images
├── models
│   ├── user.js                              # User model schema and database interactions
│   ├── category.js                          # Category model schema and database interactions
│   ├── undercategory.js                     # Undercategory model schema and database interactions
│   ├── product.js                           # Product model schema and database interactions
│   ├── cart.js                              # Cart model schema and database interactions
│   ├── cartItems.js                         # Cartitems model schema and database interactions
│   └── index.js                             # Common structure for loading and initializing Sequelize models in a Node.js.
├── routes
│   ├── userRoutes.js                        # Routes for user resources
│   ├── categoryRoutes.js                    # Routes for category resources
│   ├── underCategoryRoutes.js               # Routes for underCategory resources
│   ├── productRoutes.js                     # Routes for product resources
│   ├── cartRoutes.js                        # Routes for cart resource
│   ├── cartItemsRoutes.js                   # Routes for cartItems resource
├── migrations
│   ├── ..data..create-users.js              # Migration for user model 
│   ├── ..data..create-category.js           # Migration for category model 
│   ├── ..data..create-undercategory.js      # Migration for underCategory model 
│   ├── ..data..create-product.js            # Migration for product model 
│   ├── ..data..create-cart.js               # Migration for cart model 
│   ├── ..data..create-cartitems.js          # Migration for cartitems model
├── -uploads                                 # Downloaded Images of products and categories
└── server.js                                # Entry point for the backend server

```

### Installing

```
git clone https://github.com/EsterAbrahamyan/full-e-commerce.git
npm install

```

## Getting Started

To test the application

* Install PostgreSQL from https://www.postgresql.org/download/
* Create your free shared database and choose a username and password for it
* Add your username and password and database to the config.json file
* Example 
    "username": "postgres",
    "password": "ester",
    "database": "cakesdb"
* Make a temporary gmail account for testing purposes
* Enable 2 factor authentication and click on app passwords (article: https://mailtrap.io/blog/send-emails-with-nodejs/)
* Add your email and password for the app in the .env file
* Example
EMAIL_SENDER='yourchosenemail@gmail.com'
EMAIL_PASSWORD='password'
* Choose a random string as JWT secret or generate it in your terminal
```
node
console.log(bcrypt.randomBytes(64).toString('hex'));
```
* Copy it and place in in your .env file
* Example
TOKEN_SECRET="yourrandomlygeneratedsecret"
* Start the application
```
nodemon server.js
```
* Register via http://localhost:6005/users/register with firstname,lastname, email, and password in the body as JSON format via Postman or any alternatives
* If successful, you should get a verification email
* Email link should look like this - http://localhost:6005/users/verify/token
* Opening the link will change your username confirmed field to true and show confirmed message in the response
* Login via http://localhost:6005/users/login with the same email and password
* Your response should have a JSON token
* Place it inside the Authentication tab Bearer Token
* Make a request to http://localhost:6005/users
* If you get 200 OK and {"users": []} as a result, everything was successul
* From there you can edit the app based on your needs
* If you want to seed your post database with some random information, run node post_seed.js in the seeds folder, click "y" to delete all previous recrods or anything else to just add data without deleting anything




