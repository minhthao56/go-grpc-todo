re-build:
	docker-compose up

up:
	docker-compose up

down:
	docker-compose down --rmi all

deploy-be:
	minikube -p minikube docker-env
	minikube start
	kubectl apply -f deployment/postgres-secret.yaml
	kubectl apply -f deployment/postgres-service-deployment.yaml
	kubectl apply -f deployment/postgres-config.yaml
	docker build --no-cache -f Dockerfile.server -t grpc-todo/server:1.0 .
	kubectl apply -f deployment/go-service-deployment.yaml

gen-go:
	protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative pkg/**/*.proto

gen-ts:
	protoc -I=./ pkg/**/*.proto --js_out=import_style=commonjs,binary:./client-react/src/packages --grpc-web_out=import_style=typescript,mode=grpcweb:./client-react/src/packages

gen-proto:
	protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative pkg/**/*.proto
	protoc -I=./ pkg/**/*.proto --js_out=import_style=commonjs,binary:./client-react/src/packages --grpc-web_out=import_style=typescript,mode=grpcweb:./client-react/src/packages