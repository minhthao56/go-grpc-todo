package main

import (
	"database/sql"
	"flag"
	"fmt"
	"log"
	"net"

	"go-grpc/core/repository"
	pbUser "go-grpc/pkg/user"
	portGRPC "go-grpc/port/grpc"

	"go-grpc/database"

	_ "github.com/lib/pq"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

var (
	port = flag.Int("port", 9090, "The server port")
)

func setupGRPC(grpcSvc *grpc.Server, db *sql.DB) {
	pbUser.RegisterUserServiceServer(grpcSvc, &portGRPC.UserService{
		DB:                db,
		DomainUserService: &repository.UserService{},
	})
}

func main() {

	db := database.Init()
	defer db.Close()

	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()

	setupGRPC(s, db)

	reflection.Register(s)

	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
