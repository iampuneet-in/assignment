# ABN Assignment


## Project setup

### Prerequisites
As we are using docker so you don't need to install any specific software other than docker itself.
- Docker installed
- Git
```
yarn up
```
### Lints and prettier
```
yarn lint
```

## Application Architecture

This project is using vue3.

### Dockerize Application

This Project use docker for developing, shipping and running. As docker enables you to seperate your application
from your infrastructure. We can use copilot and AWS ECS to deploy these images.  
``` Docker file path : ops\docker```
``` Docker Compose file path : .\docker-compose.yml ```

Build Project image with latest changes in infra :  
``` docker-compose up --build ```

Also it's using hot reloading by enabling watchOptions in ``` vue.config.js ```



    devServer: {
	    watchOptions: {
	    ignored: /node_modules/,
	    aggregateTimeout: 300,
	    poll: 1000,
	    },
    }

### Using Store for managing application state

This project made use of vuex as a store to manage the state of the application.There is a middleware in store which is extendable for other methods in POST/DELETE/PUT/DELETE
```
src\store
get({ dispatch }, options) {
	options.method = 'get';
	return dispatch('send', options);
},
```
These actions you can dispatch in other stores
```
const data = await dispatch(
	'get',
	{ action: '/shows' },
	{ root: true }
);
```
### Composition API
This project is using Composition APIs for all of it's components which gives a nice way to write all the methods
and hooks in ```setup()``` method.

### Composables
Composable are under : ```src\helpers\composables.js``` . As we know these functions can be reusable in various pages and components.

``` src\helpers\api.js ``` API middleware is just a very basic interceptor to use in store

### Unit testing
This Project uses jest for unit testing components. ```eslint``` is disabled for all the spec.js files under test directory. fixtures have been used to mock data within different components.

 - [x] ``card.spec.js`` This test case the image size of the card should
       be medium size only
 - [x] ``genreslider.spec.js`` This test case testing the correct genre of every slider
 - [x] ``search.spec.js`` : This test case testing the search box by inputting and clicking search button then it should route to other page.

Run test cases by following command : 
``` yarn test:unit ```

###  End to end testing
This project uses Cypress for e2e testing of the application. Cypress uses Node.js to start a browser under special control. The tests in this framework are run at browser level.

To open cypress browser within the project, you must have project in running state. Use following command to open cypress

``` yarn cypress:open ```

To run cypress test cases through cli, you can run : 

```yarn cy:run```

###  Github actions
This project is using GitHub actions for setting up the CI/CD pipeline for deploying application. In a very first step, it's setting up the node16.x and in second step, artifacts and caching are similar because they provide to store files on Github.I means it uses caching when you want to reuse files that don't change often between jobs or workflow runs

Checking if ```cache-nodemodules``` is there then do not install packages.
``` if: steps.cache-nodemodules.outputs.cache-hit != 'true' ```
  

##  Features
- [x] Landing page for showing horizontal list of TV shows based on genres
- [x] Add search functionality by query parameters
- [x] Search Page to display your search results
- [x] Movie details page 
- [x] Responsive design and UI
- [x] Unit tests with jest
- [x] Cypress for covering e2e test coverage
- [x] Dockerize Application
- [x] CI/CD Pipeline
