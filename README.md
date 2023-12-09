# Welcome to Flight service

## Project Setup

- clone the project on your local
- Execute "npm install" on the same path as your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
     - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of code

```
{
  "development": {
    "username": "root",
    "password": "MERN",
    "database": "Flights_Search_Db_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

-- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`



## DB Design

  -Airplane Table
  -Flight Table
  -Airport Table
  -City Table

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city can have many airports but a airport belongs to a particular city
  - One airport can have many flights but a flight belongs to one airport only.