package main

import (
	"context"
	"database/sql"
	"flag"
	"fmt"
	"log"
	"net"

	pb "go-grpc/todo"

	"go-grpc/database"

	_ "github.com/lib/pq"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

var (
	port = flag.Int("port", 9090, "The server port")
)

type server struct {
	pb.UnimplementedTodoServiceServer
	db *sql.DB
}

func (s *server) AddToDo(ctx context.Context, in *pb.TodoRequestResponse) (*pb.TodoRequestResponse, error) {

	log.Printf("Title received : %v", in.GetTitle())

	return &pb.TodoRequestResponse{Title: in.GetTitle(), Description: in.GetDescription(), IsCompleted: in.GetIsCompleted()}, nil

}

func main() {

	db := database.Init()

	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterTodoServiceServer(s, &server{
		db: db,
	})

	reflection.Register(s)

	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
