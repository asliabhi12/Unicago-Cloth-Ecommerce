React JS Ecommerce Website with Firebase Authentication

This is a sample ecommerce website built with React JS and Firebase Authentication. The website allows users to browse products, add items to cart, checkout and pay using Stripe payment gateway. Firebase Authentication is used to authenticate users and secure the application.
Features

    User authentication with Firebase Authentication
    Browse products and view product details
    Navigate throught Contact us and Register pages
    

Installation

    Clone the repository
    Install the dependencies by running npm install
    Create a Firebase project and enable Authentication and Firestore database
    Create a .env file in the root directory and add the following environment variables:

makefile

REACT_APP_FIREBASE_API_KEY=<your_firebase_api_key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
REACT_APP_FIREBASE_PROJECT_ID=<your_firebase_project_id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your_firebase_storage_bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
REACT_APP_FIREBASE_APP_ID=<your_firebase_app_id>

REACT_APP_STRIPE_API_KEY=<your_stripe_api_key>

    Run the application using npm start

Usage

    To use the application, create an account or login with your existing account
    Browse products by clicking on the "Shop" link
    View product details by clicking on a product
    Add items to cart by clicking on the "Add to Cart" button
    View cart by clicking on the "Cart" link in the navigation bar
    Update cart by changing the quantity or removing items
    Checkout and pay using Stripe payment gateway
    To access the admin panel, navigate to /admin and login as an admin user

Contributing

Contributions are welcome. To contribute, fork the repository and create a pull request with your changes.
License

This project is licensed under the MIT license. See the LICENSE file for details.
