

- [Overview](#overview)
  - [Objectives](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [To Do](#to-do)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Emma's eCommerce** is a full stack app, that allows administrators to keep track of sellers, each of their customers, and the items that customers buy


### Objectives

- Create skeleton/structure files for back end and front end.
- Back End CRUD: build Rails server, database with MVC logic; build functionality and test CRUD in Postman.
- Front End CRUD: Render sellers, customers and items; create edit and delete functionality in Customer Details page; create new sellers and users in seperate Create pages
- CSS for all screens and components, including Grid and Flexbox
- Deployment to Heroku and Netlify.
<br>

### Libraries and Dependencies
React, React Router, Rails, Ruby, Bundler, Gem

<br>

### Client (Front End)

#### Wireframes

https://app.lucidchart.com/invitations/accept/9ff2914f-8708-4cc2-b72b-e0861aaf584c

#### Component Tree

https://whimsical.com/DVc231xT1wrCbskkTUqWQZ
#### Component Hierarchy

 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
  |__ shared
      |__ Header.jsx
      |__ Footer.jsx
      |__ Layout.jsx
|__ screens/
 |__ MainContainer.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ CustomerList.jsx
      |__ CustomerCreate.jsx
      |__ CustomerDetail.jsx
      |__ ItemsList.jsx
      |__ ItemEdit.jsx

```

#### Component Breakdown


|     Component      |  Description                                            |
|    :----------:    |  :----------------------------------------------------  |
|   Layout           |  Contains the nav header and footer components          |
|   Login            |  Gives access to reegistered sellers.                   |
|   Register         |  Creates an account for new sellers.                    |
|   CustomerList     |  Renders a form needed to edit a customer's details     |
|   CustomerCreate   |  Renders a form needed to add a new customer.           |
|   CustomerDetail   |  Shows all items a customer selected                    |
|   ItemsList        |  Reads all items.                                       |
|   ItemEdit         |  Updates one item.                                      |




### Server (Back End)

#### ERD Model


<br>
https://app.lucidchart.com/invitations/accept/f0bde52d-fbcf-4883-8974-e57326d754bc



#### To Do


- Assign prices to items and total prices for customers with multiple items



## Code Issues & Resolutions

