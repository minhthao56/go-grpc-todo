package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"os"

	pb "go-grpc/todo"

	_ "github.com/lib/pq"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

var (
	port = flag.Int("port", 9090, "The server port")
)

type server struct {
	pb.UnimplementedTodoServiceServer
	//db *sql.DB
}

func (s *server) AddToDo(ctx context.Context, in *pb.TodoRequestResponse) (*pb.TodoRequestResponse, error) {

	log.Printf("Title received : %v", in.GetTitle())

	return &pb.TodoRequestResponse{Title: in.GetTitle(), Description: in.GetDescription(), IsCompleted: in.GetIsCompleted()}, nil

}

func main() {

	fmt.Println("USER_NAME:", os.Getenv("USER_NAME"))
	fmt.Println("USER_PWD:", os.Getenv("USER_PWD"))

	//db := database.Init()

	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	// pb.RegisterTodoServiceServer(s, &server{
	// 	db: db,
	// })
	pb.RegisterTodoServiceServer(s, &server{})

	reflection.Register(s)

	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}
