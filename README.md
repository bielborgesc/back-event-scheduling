
### :heavy_check_mark: FINISHED
#### :green_book: [API] Event Scheduling
# :heavy_dollar_sign: Event Scheduling

## :date: Objective
Event Scheduling is an event scheduler with invitation support. Through this application, it's possible to manage your own events consisting of: name, start date, and end date. Each user has their own events, but there's nothing stopping them from inviting other users to their events. The application supports inviting multiple users registered in the application. Remember that all invitations are created with a "pending" status, and the user you invited needs to accept this invitation.

## :computer: Development
* In this application, we use:
-> Programming Language: TypeScript -> Node Framework: NestJS -> ORM: TypeORM -> Database: MySQL.
To avoid errors, we decided not to require the use of docker-compose at this stage. So, some initial configurations are necessary.

* 1st If you haven't installed MySQL, follow the installation manual: [MySQL Installation Manual](https://dev.mysql.com/doc/mysql-getting-started/en/)
* 2nd After installation and configuration, create the database in your database with the following command:

```bash
CREATE DATABASE event_scheduling;
```
* Now, your database is ready to receive tables via TypeORM.

### Installing Dependencies

* Now open the terminal at the same level as the application to install the dependencies, execute the following command in your terminal:
```bash
$ npm install
```

## :arrow_forward: Run the code
* Let's now run the application. First, open the '.env' file that is at the root level of the application. There you will need to fill in the fields:

* TYPEORM_HOST= <i>Put your host here, if you're running MySQL locally, just put LOCALHOST</i>
TYPEORM_USERNAME= <i>Here is your database username, if you haven't changed it during installation, just put root</i>
TYPEORM_PASSWORD= <i>Here you need to insert the password to connect to your database</i>

* The other information is already pre-filled because they are defaults, but if they are different from yours, feel free to change them.

* After installing all dependencies and configuring the database connection file, run the following command:
```bash
$ npm run start
```
### Application Endpoints

* To facilitate your tests, we have provided a Postman test file, which can be installed at the following link: [Postman Test File](https://www.postman.com/bold-crescent-5117/workspace/public-works/collection/17256975-65cc41c5-eb90-4f8f-ab33-cb8c66b184b5?action=share&creator=17256975)


## :heavy_check_mark: Concluding
  The main objective of this application is to be an API for the interface found in the repository: [front-event-scheduling](https://github.com/bielborgesc/front-event-scheduling). We are using a REST architecture to communicate with the frontend.
  
## :raising_hand_man: Developer

Gabriel Carvalho
