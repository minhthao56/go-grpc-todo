package grpc

import (
	"context"
	"database/sql"
	"go-grpc/core/entity"
	"go-grpc/core/repository"
	pb "go-grpc/pkg/user"
)

type DomainUserService interface {
	repository.UserRepo
}

//Thỏa entity.User
type GRPCUser struct {
	entity.EmptyUser
	username string
	password string
}

func (u GRPCUser) Username() string {
	return u.username
}

func (u GRPCUser) Password() string {
	return u.password
}

type UserService struct {
	pb.UnimplementedUserServiceServer
	DB                *sql.DB
	DomainUserService DomainUserService
}

func (s *UserService) AddUser(ctx context.Context, req *pb.UserAddRequest) (*pb.UserResponse, error) {

	user := GRPCUser{
		username: req.Username,
		password: req.Password,
	}

	err := s.DomainUserService.Create(ctx, s.DB, user)

	if err != nil {
		return nil, err
	}

	oneUser, err := s.DomainUserService.GetOneUserByUsername(ctx, s.DB, req.Username)

	if err != nil {
		return nil, err
	}
	return &pb.UserResponse{UserId: int32(oneUser.ID.Int), Username: user.username}, nil

}
