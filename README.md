# Task-CRUD

#### This is simple graphQL CRUD API for todo list

## Run locally
```bash
git clone https://github.com/sealch/task-crud.git
cd task-crud
npm i && npm start

```

Note: mongo must be running. Open new tab in terminal and execute:
```bash
mongod --dbpath ~/path/to/mongo/data

```

Now server should be running at http://localhost:5000/

## Available requests:
### Queries:
#### allTasks

```
query {
  allTasks {
    id,
    name,
    done
  }
}
```
Returns a list with all tasks in database.

### Mutations:
#### createTask

```
mutation {
  createTask(name:"Do some stuff", done: false) {
    id,
    name,
    done
  }
}
```
Creates new task. Name and done are required.

#### updateTask

```
mutation {
  updateTask(id: "5e8090d4ac4ca929fd603f99", done: true ) {
    id,
    name,
    done
  }
}
```
Updates status of existing task. Id and done are required.

#### deleteTask

```
mutation {
  deleteTask(id: "5e8090d4ac4ca929fd603f99") {
    id,
    name,
    done
  }
}
```
Deletes existing task. Id is required.

### Data types:
| id | name |  done |
| ------ | ------ | ------ |
| String | String | Boolean |

## Environment variables
| variable | default |  required |
| ------ | ------ | ------ |
| mongoUrl | mongodb://localhost:27017/ | no |
| PORT | 5000 | no |

#### To edit environment variables do:

```bash
touch .env

```
and create variable from the list above.


##### For serverless version see: https://github.com/sealch/task-crud-lambda
