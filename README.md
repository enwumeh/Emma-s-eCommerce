

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

_**Emma's eCommerce** is a full stack app, that allows administrators to keep track of sellers, each of their customers, and the items that customers buy


## MVP



### Goals

- Create skeleton/structure files for back end and front end.
- Back End CRUD: build Rails server, database with MVC logic; build functionality and test CRUD in Postman.
- Front End CRUD: Render sellers, customers and items; create edit and delete functionality in Customer Details page; create new sellers and users in seperate Create pages
- CSS for all screens and components, including Grid and Flexbox
- Deployment to Heroku and Netlify.
<br>

### Libraries and Dependencies


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


|     Component      |    Type    | state | props | Description                                                            |
|    :----------:    | :--------: | :---: | :---: | :---------------------------------------------------------------       |
|    Layout          | functional |   n   |   y   | _The layout will contain the nav header and footer components          |
|    Login           | functional |   n   |   y   | _Login will give access to reegistered sellers._                       |
|   Register         | functional |   n   |   y   | _Register will create an account for new sellers._                     |
|   CustomerList     | functional |   y   |   y   | _CustomerEdit will render a form needed to edit a customer's details_  |
|   CustomerCreate   | functional |   y   |   y   | _CustomerCreate will render a form needed to add a new customer._      |
|   CustomerDetail   | functional |   y   |   y   | _CustomerDetail will show all items a customer selected_               |
|   ItemsList        | functional |   y   |   n   | _ItemsList will read all items._                                       |
|   ItemEdit         | functional |   n   |   y   | _ItemsEdit will update one item._                                      |


#### Time Estimates


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
https://app.lucidchart.com/invitations/accept/f0bde52d-fbcf-4883-8974-e57326d754bc
## Post-MVP


***
- Assign prices to items and total prices for customers with multiple items



## Code Showcase


## Code Issues & Resolutions

