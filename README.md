## Gen----Go----

`protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative todo/*.proto`

## Gen---TS---

`protoc -I=./ todo/*.proto --js_out=import_style=commonjs,binary:./client-react/src/packages --grpc-web_out=import_style=typescript,mode=grpcweb:./client-react/src/packages`

## --Envoy--

`docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.22.0`

`docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.22.0`

## --grpcurl--

`go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest`

export PATH=$PATH:/usr/local/go/bin
export GO_PATH=~/go
export PATH=$PATH:/$GO_PATH/bin

`grpcurl -plaintext -d '{"title":"title"}' localhost:9090 TodoService.AddToDo`

## Docker

`docker build -f Dockerfile.envoy -t grpc-todo/envoy:1.0 .`

`docker build -f Dockerfile.server -t grpc-todo/server:1.0 .`

`docker build -f Dockerfile.react -t grpc-todo/react:1.0 .`

`docker run -d --network=host grpc-todo/envoy:1.0`

`docker run -d -p 9090:9090 grpc-todo/server:1.0`

`docker run -d -p 3000:3000 grpc-todo/react:1.0`

## Run database

`docker run --name postgresql-todo -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres:14.6-alpine`

`sudo -i -u postgres psql -c 'create database todo-db;'`
