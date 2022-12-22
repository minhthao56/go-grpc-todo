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
