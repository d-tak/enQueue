# final-project

## A dynamic, full stack JavaScript solo project.

This project provides a simple, functional platform for businesses to utilize a digital queue system.

As society continues to yearn for togetherness, small-businesses often struggle to keep up with the demand and onset of customer clientele.  This application affords businesses a simple yet practical platform to keep track of guests and patrons.  Whether operating food services such as dining establishments, providing personal care via salons and barbershops, or simply having the need for a digital waitlist, WaitingFuze allows users to keep track of a waiting log.

As the world continues to race around us, waiting shouldn't feel like forever.


**[Click Here To View Live Demo](https://waitlist.d-tak.com "WaitingFuze - A Full Stack JavaScript Solo Project")**

## Technologies Applied
* HTML
* CSS
* JavaScript
* UI Framework: React
* JavaScript Runtime: Node.js
* Server Framework: Express
* Database: PostgreSQL
* Modeule Bundler: Webpack
* Deployment Platform: Dokku


## Database Schema
![Database Schema](/server/public/images/DBDatabase.png)


## Application Features
* Business can create a profile
* Business can view its profile
* Patrons can join a business' waitlist
* Patrons can enter details and comments on the waitlist
* Patrons can view the waitlist and its existing queues in order

## Application Preview
![waitingFuze Demo](/server/public/images/demo.gif)

## Stretch Features
* Users can delete their entries
* Business can sign in to respective profile
* Business can sign out of respective profile


## Getting Started
**For end-users**
* To access this project, click on the provided url.
* Upon first glance, business owners will be presented with a form that will generate a profile once data is inputted.
* Businesses and patrons can navigate through the application by utilizing the provided buttons.

**For Developers** <br>
*If you are a developer and are interested in collaborating with the existing code in this project, please proceed to the following.  Thank you for your interest and support!*

1. Clone repository. <br>
[Click to access repository on GitHub](https://github.com/d-tak/final-project)

2. Install dependencies in ```package.json``` with npm (if needed). <br>
```npm install```

3. Create an ```.env``` file using the ```.env.example``` template as a reference. <br>
```cp .env.example .env```

4. Update the environment variable in the ```.env``` file<br>
```DATABASE_URL=postgres://dev:dev@localhost/[nameOfDatabase]?sslmode=disable```

5. Ensure that ```postgresql``` is running by using the following commands in your terminal. <br>
```sudo service postgresql status``` <br>
```sudo service postgresql start``` <br>
```sudo service postgresql stop```

6. Create a database (if necessary). <br>
```createdb nameOfDatabase```

7. Initialize the database<br>
**(WARNING! Make sure you have the right database in the DATABASE_URL).** <br>
```npm run db:import```

8. Launch the database in your local browser to view user inputs<br>
```pgweb --db=[nameOfProject]```

9. Build and start the application.<br>
```npm run build``` <br>
```npm run start```


10. The application should become accessible via your localhost in the browser at:
```http://localhost:3000```
