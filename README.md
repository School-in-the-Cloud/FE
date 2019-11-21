School In The Cloud
Deployed website: https://school-in-the-cloud-fe.netlify.com/

Description
School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting.  This helps kids in communities with high student to teacher ratios. It also provides retired volunteers a sense of purpose and meaning in their day to day life when they find themselves with more free time.  The platform also connects volunteers with the students. The aim is to help close the achievement gap by connecting students with available, qualified volunteer mentors. 

Getting Started
To begin using the App as a client end user, follow the link and Sign Up for a new account with a username and password. User will be prompted to enter username and password again after the inital Sign Up to login to their dashboard.

To login to the App, click the link to sign up, and create a new account.

To view the dashboard, login with correct correct user credentials.

To create a new to do list

To view the to do lists

To edit a to do list

To delete a to list

Prerequisites
All of the below dependencies can be installed using: yarn install or npm install

Start development by creating a react app using: yarn start or npm start

Dependencies
This project was created using yarn and designed for react client side. Other dependencies include:

"axios": "^0.19.0",
"formik": "^1.5.8",
"now": "^16.2.0",
"react": "^16.9.0",
"react-dom": "^16.9.0",
"react-iframe": "^1.8.0",
"react-loader-spinner": "^3.1.4",
"react-redux": "^7.1.1",
"react-router-dom": "^5.0.1",
"react-scripts": "3.1.2",
"redux": "^4.0.4",
"redux-thunk": "^2.3.0",
"styled-components": "^4.4.0",
"yup": "^0.27.0"



Examples of Tables
The "users" table looks like this:

"username": "demo",
"password": "123456",

The "Add New Campaign" table look like this:

"campaign_name": "Awesome projcet"
"campaign_category": "Software"
"Fundraising Goal: "100000"
"Country: "United State"
"Duration: "45 days"
"Description": "This is an awesome project!"

Endpoint Usage
POST - Register a new user *** Requires a username, and password

https://schoolinthecloud.herokuapp.com/api/auth/register

POST - Login a registered user. Also provides Web Token. *** Requires username and password

https://schoolinthecloud.herokuapp.com/api/auth/login

GET - Returns all campaigns *** Requires JSON Web Token https://schoolinthecloud.herokuapp.com/api//schoolinthecloud/user/:user_id

POST - Adds a new campaign *** Requires JSON Web Token and a data object https://schoolinthecloud.herokuapp.com/api//schoolinthecloud/user/:user_id

PUT - Edits a campaign with the selected id *** Requires JSON Web Token and a data object https://schoolinthecloud.herokuapp.com/api//schoolinthecloud/:id

DELETE - Deletes a campaign with the selected id *** Requires JSON Web Token https://schoolinthecloud.herokuapp.com/api//schoolinthecloud/:id

Support
There is currently no active support for this app

Authors and acknowledgment
UI Engineers: Robert Gordon (https://github.com/)

Front End Engineers: 

Front End Framework Engineer:

Backend Engineer:

Project Lead: 

Full Repo: https://github.com/School-in-the-Cloud/

Project status
This project was completed for a Lambda School build week November 2019. There may be updates to the application periodically

License
This project is licensed under the MIT License - see the LICENSE file for details
