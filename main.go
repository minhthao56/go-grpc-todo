package main

import (
	"context"
	"log"
	"net"

	pb "go-grpc/todo"

	"google.golang.org/grpc"
)

var (
	port = ":9090"
)

type server struct {
	pb.UnimplementedTodoServiceServer
}

func (s *server) AddToDo(ctx context.Context, in *pb.TodoRequestResponse) (*pb.TodoRequestResponse, error) {

	log.Printf("Title received : %v", in.GetTitle())

	return &pb.TodoRequestResponse{Title: in.GetTitle(), Description: in.GetDescription(), IsCompleted: in.GetIsCompleted()}, nil

}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterTodoServiceServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
