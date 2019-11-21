# School In The Cloud

**Deployed website:** https://school-in-the-cloud-fe.netlify.com/

## Description
School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting.  This helps kids in communities with high student to teacher ratios. It also provides retired volunteers a sense of purpose and meaning in their day to day life when they find themselves with more free time.  The platform also connects volunteers with the students. The aim is to help close the achievement gap by connecting students with available, qualified volunteer mentors. 

## Getting Started
To begin using the App, follow the link and Sign Up for a new account with a username and password.  Fill in the required information, and select your user type.  Volunteers will have to add their location and available time. User will be prompted to enter email and password again after the inital Sign Up to login to their dashboard.

To login to the App, click the link to sign up, and create a new account.

To view the dashboard, login with the correct user credentials.

To create a new to do list, login as admin, on the admin dashboard, click "create list", fill in the required information and assign the list to a volunteer, then click save.

To view the to do lists, login with the correct user credentials.

To edit a to do list, login as admin, find the list you'd like to edit, click the edit button, fill in the required information, then click save.

To delete a to list, login as admin, find the list you'd like to delete, click the edit button, then click the delete button.

## Prerequisites
All of the below dependencies can be installed using: yarn install or npm install

Start development by creating a react app using: yarn start or npm start

## Dependencies
This project was created using yarn and designed for react client side. Other dependencies include:
```
    "@fortawesome/fontawesome-svg-core": "^1.2.25",
    "@fortawesome/free-brands-svg-icons": "^5.11.2",
    "@fortawesome/free-solid-svg-icons": "^5.11.2",
    "@fortawesome/react-fontawesome": "^0.1.7",
    "axios": "^0.19.0",
    "babel-loader": "^8.0.6",
    "formik": "^2.0.4",
    "react": "^16.12.0",
    "react-animations": "^1.0.0",
    "react-dom": "^16.12.0",
    "react-loader-spinner": "^3.1.5",
    "react-redux": "^7.1.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.2.0",
    "redux": "^4.0.4",
    "redux-thunk": "^2.3.0",
    "styled-components": "^4.4.1",
    "yup": "^0.27.0"
```

# API
base URL: https://school-in-the-cloud.herokuapp.com/api

## Authentication
### Registration:
POST "/auth/register"

Request Body:
```
{
  "password": string (8 char min - required),
  "email": string (must include '@' and '.' - required),
  "first_name": string (required),
  "last_name": string (required),
  "type": string ('admin', 'volunteer', or 'student' - required),
  "availability": string (required for volunteer),
  "country": string (required for volunteer)
  "
}
```

Response Body:
```
{
  "user": {
    "id": integer (primary key for 'users' table),
    "password": string (hashed),
    "type": string,
    "first_name": string,
    "last_name": string,
    "email": string,
  },
  "roleInfo":
    {
      "id": integer (primary key for role table - 'admins', 'volunteers', 'students'),
      "availability": string (volunteers only),
      "country": string (volunteers only),
      "user_id": integer (same as "id" in "user" object above)
    },
  "token": string (will be required for protected routes)
}
```

### Login
POST "/auth/login"

Request Body:
```
{
  "password": string,
  "email": string
}
```

Response Body:
```
{
  "user": {
    "id": integer (primary key for 'users' table),
    "password": string (hashed),
    "type": string,
    "first_name": string,
    "last_name": string,
    "email": string,
  },
  "token": string
}
```

## Admins
 
 ### Create To-Do:
 POST to ``` https://school-in-the-cloud.herokuapp.com/api/admins/:id/todos```
 where id is the admin's user id.

 Request Body:
 ```
{
    "volunteer_id": number,
    "name": string,
    "items": array of strings
}
 ```

 Response Body:
 #### Note: I will change this to return the new todo.
 {
   "todo_id": number
 }

### Update To-Do
PUT to ```https://school-in-the-cloud.herokuapp.com/api/admins/:id/todos```

Request Body:
```
{
        "todo_id": integer,
        "name": new name, string,
        "steps": [
            {
                "id": step id, integer (same as todo_id above),
                "todos_id": same as todo_id above,
                "description": new description for step, string
            },
            {
                "id": step_id,
                "todos_id": integer (same as todo_id above),
                "description": new description for step, string
            },
        ]
}
```
 
## Volunteers
### Get Assigned To-Dos:
GET to ```https://school-in-the-cloud.herokuapp.com/api/volunteers/:id/todos```
where id is volunteer's user id.

Response Body:
```
[
  {
    "todo_id": number,
    "admin_id": number,
    "volunteer_id": number,
    "steps": array of strings
  },
  ...
]
```

## Support
There is currently no active support for this app.

## Authors and acknowledgment

**UI Engineer:** Robert Gordon (https://github.com/RobertDGordon)

**Front End Engineers:** Robert Gordon (https://github.com/RobertDGordon) Nate Rojanasupya (https://github.com/nattroj)

**Backend Engineer:** Patrick Stevenson (https://github.com/patjonstevenson/)

**Project Lead:** Jojo Zhang (https://github.com/nomadkitty)

**Full Repo:** https://github.com/School-in-the-Cloud/

## Project status
This project was completed for a Lambda School build week November 2019. There may be updates to the application periodically

## License
This project is licensed under the MIT License - see the LICENSE file for details
