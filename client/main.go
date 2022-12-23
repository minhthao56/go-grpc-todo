package main

import (
	"context"
	"log"
	"time"

	pb "go-grpc/pkg/todo"

	"google.golang.org/grpc"
)

var (
	address = "localhost:9090"
)

func main() {
	// Set up a connection to the server.
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	client := pb.NewTodoServiceClient(conn)

	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	r, err := client.AddToDo(ctx, &pb.TodoAddRequest{

		Title:       "TITLE_TEST",
		Content:     "Description_TEST",
		IsCompleted: false,
	})
	if err != nil {
		log.Fatalf("could not greet: %v", err)
	}
	log.Printf("Greeting: %s", r.GetTitle())
}
