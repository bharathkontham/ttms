# Ticket Management for theatres APIs

## Running using node

### Requirements

* Node.js 10.x
* Elasticsearch 7.x

### Start application

* Clone repository
* run below command to install node modules

```shell
 npm install
```

* configure elasticsearch details in config/default.js

* run server using below command

```shell
node server/server.js
```

* View APIs in swagger explorer at <http://localhost:4444/explorer>

## Run using docker

* Run 

```shell
docker-compose up
```

* APIs are accessible via <http://localhost:4444/explorer>

## Run tests

* tests are done on controllers using jest framework
* to run tests and get coverage reports run below command

```shell
npm run test
```
