----Go----
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative todo/\*.proto

---TS---
protoc -I=./ todo/\*.proto --js_out=import_style=commonjs,binary:./client-react/src/packages --grpc-web_out=import_style=typescript,mode=grpcweb:./client-react/src/packages

--Envoy--
docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro --network=host envoyproxy/envoy:v1.22.0

docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.22.0

export PATH=$PATH:/usr/local/go/bin
export GO_PATH=~/go
export PATH=$PATH:/$GO_PATH/bin
