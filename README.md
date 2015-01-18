## Install and Run

```
$ npm install
$ npm start # defaults to port 3000
$ npm run build-scripts-dev
$ npm run build-scripts
```


## API

> the following request are all `Content-Type: application/json`

```
GET /api/v1/counters
# []

POST {title: "Bob"} /api/v1/counter
# [{id: "asdf", title: "Bob", count: 0}]

POST {title: "Steve"} /api/v1/counter
# [{id: "asdf", title: "Bob", count: 0}, {id: "qwer", title: "Steve", count: 0}]

POST {id: "asdf"} /api/v1/counter/inc
# [{id: "asdf", title: "Bob", count: 1}, {id: "qwer", title: "Steve", count: 0}]

POST {id: "qwer"} /api/v1/counter/dec
# [{id: "asdf", title: "Bob", count: 1}, {id: "qwer", title: "Steve", count: -1}]

DELETE {id: "qwer"} /api/v1/counter
# [{id: "asdf", title: "Bob", count: 1}]
```
