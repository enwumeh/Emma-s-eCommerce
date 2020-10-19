

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Emma's eCommerce** is a full stack app that allows administrators to keep track of sellers, each of their customers, and the items that customers buy


## MVP



### Goals

- Create skeleton/structure files for back end and front end.
- Back End CRUD: build Rails server, database with MVC logic; build functionality and test CRUD in Postman.
- Front End CRUD: Render sellers, customers and items; create edit and delete functionality in Customer Details page; create new sellers and users in seperate Create pages
- CSS for all screens and components, including Grid and Flexbox
- Deployment to Heroku and Netlify.
<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                                               |
| :--------------: | :------------------------------------------------------------------------ |
|      React       | JS library for building user interfaces                                   |
|   React Router   | tool that allows you to handle routes in a web app with dynamic routing   |
|     Rails        | web framework that combines Ruby with JS                                  |
|     Ruby         | open source programming language with focus on simplicity and productivity|
|     Bundler      | ensures that the needed gems are present in development                   |
|     Gem          | package manager: extend or modify funcitonality in Ruby apps              |



<br>

### Client (Front End)

#### Wireframes

https://app.lucidchart.com/invitations/accept/4394e4b8-69a1-4320-a209-46ecbb08ce6c

#### Component Tree

https://whimsical.com/DVc231xT1wrCbskkTUqWQZ

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

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
      |__ Customers.jsx
      |__ CustomerEdit.jsx
      |__ CustomerCreate.jsx
      |__ CustomerDetail.jsx
      |__ Sellers.jsx
      |__ SellerCreate.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|     Component      |    Type    | state | props | Description                                                            |
|    :----------:    | :--------: | :---: | :---: | :---------------------------------------------------------------       |
|    Layout          | functional |   n   |   y   | _The layout will contain the nav header and footer components          |
|   Customers        | functional |   n   |   y   | _Customers will render all customers for a given seller._              |
|   CustomerEdit     | functional |   y   |   y   | _CustomerEdit will render a form needed to edit a customer's details_  |
|   CustomerCreate   | functional |   y   |   y   | _CustomerCreate will render a form needed to add a new customer._      |
|   CustomerDetail   | functional |   y   |   y   | _CustomerDetail will show all items a customer selected_               |
|   Sellers          | functional |   y   |   n   | _This will be the landing page of the app, and show all the sellers._  |
|   SellersCreate    | functional |   n   |   y   | _This will be a form to add a seller to the site._                     |


#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                        | Priority           | Estimated Time | Time Invested | Actual Time |
| --------------------------- | :----------------: | :------------: | :-----------: | :---------: |
| Build out rails server      |         H          |     5 hrs      |       hrs     |     TBD     |
| MVC DB funcitonality        |         H          |     5 hrs      |       hrs     |     TBD     |
| Create CRUD Actions FRONTEND|         H          |     6 hrs      |       hrs     |     TBD     |
| Create CRUD Actions BACKEND |         H          |     6 hrs      |       hrs     |     TBD     |
|Render components/React skeleton.      H          |     8 hrs      |       hrs     |     TBD     |
| Deployment Back and Front   |         H          |     1 hrs      |       hrs     |     TBD     |
| CSS for screens+components  |         H          |     3 hrs      |       hrs     |     TBD     |
| TOTAL                       |                    |     34 hrs     |       hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model


<br>
https://lucid.app/invitations/accept/f0bde52d-fbcf-4883-8974-e57326d754bc
## Post-MVP


***
- add CRUD functionality for items on website
- build OAuth functionality for admin (username and password)
- Assign prices to items and total prices for customers with multiple items



## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
