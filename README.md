![eWay-CRM Logo](https://www.eway-crm.com/wp-content/themes/eway/img/logo_new-new.svg)

# React Sample App (Interview Assignment v2)

Hello and welcome to eWay-CRM job interview. We are happy to see you playing around with our code!

## Installation

### Prerequisites

To be able to run this project on your own computer, you will need [NPM & Node.JS](https://www.npmjs.com/get-npm).

### Duplicate and Run Non-Publicly

To install and run this project on your computer, please create a private repository and [duplicate](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/duplicating-a-repository) this repository to it.
Once you have all the sources on your computer, open command line in the directory where the repository was cloned into (the directory where `.gitignore` and `README.md` files are located). Run

```
npm install
```

to initialize the project structure and dependencies. Then run

```
npm start
```

A new window or tab of you default browser appears and the url is http://localhost:3000. Inside the browser the react web app is running. Feel free to edit the sources and the page will reload as you save the file.

We wish you a happy coding.

## Your Goal

The standard goal we want you to accomplish is an app consisting of two parts.

First part is a form where the user types contact's email address. After submitting the form, something like a business card containing the contact's info should appear. The profile picture should be shown as well.

You should also handle the states, where wrong user input is given or no contact is found.

Second part of the app is a list of previously visited contacts. This list must preserve browser window/tab close and reopen. The user should be able to click the contacts they previously visited and open their business card again. Keep in mind, that contact info including the email address might change over time. If so, you should update the data in the preserverd list. Items in the list must not sync among other users or devices.

The [library for communication with eWay-CRM API](https://github.com/eway-crm/js-lib) is already included.

Feel free to update or add new dependencies. Using the latest React features is welcome.

## My solution

For styling I decided to use Material UI library and its sx prop.

1.  Goal:
    I created a single input for email with error handling for no and invalid email before I send API reguest. If no email is found I show error message.
    If contact is found, I show user business card with some of the info that I decided was most important.
2.  Goal:
    I decided to use localStorage for storing data about previously searched contacts (this way it persist page refresh). Also at first only basic info is displayed, and if user clicks on more icon, API call is made to get the rest of the info.

Overall I tried to keep code modular with Components files and also two custom hooks. For the scale of this app and the goals I decided to not deal with routing since I felt like it wasnt neceserry.
