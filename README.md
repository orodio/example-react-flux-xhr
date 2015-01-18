## API

```
$ curl localhost:3000/api/v1/counters
# => {};

$ curl -X POST -d '{"title": "gary"}' -H "Content-Type: application/json" localhost:3000/api/v1/counter
# => {"asdf" : {"id": "asdf", "title": "gary", "count": 0}}

$ curl -X POST -d '{"title": "bob"}' -H "Content-Type: application/json" localhost:3000/api/v1/counter
# => {"asdf" : {"id": "asdf", "title": "gary", "count": 0}, "qwer": {"id": "qwer", "title": "bob", "count": 0}}

$ curl -X POST -d '{"id":"asdf"}' -H "Content-Type: appliction/json" localhost:3000/api/v1/counter/inc
# => {"asdf" : {"id": "asdf", "title": "gary", "count": 1}, "qwer": {"id": "qwer", "title": "bob", "count": 0}}

$ curl -X POST -d '{"id":"asdf"}' -H "Content-Type: appliction/json" localhost:3000/api/v1/counter/dec
# => {"asdf" : {"id": "asdf", "title": "gary", "count": 0}, "qwer": {"id": "qwer", "title": "bob", "count": 0}}

$ curl localhost:3000/api/v1/counters
# => {"asdf" : {"id": "asdf", "title": "gary", "count": 0}, "qwer": {"id": "qwer", "title": "bob", "count": 0}}

$ curl -X DELETE -d '{"id":"asdf"}' -H "Content-Type: appliction/json" localhost:3000/api/v1/counter
# => {"qwer": {"id": "qwer", "title": "bob", "count": 0}}
```
