package grpc

import (
	"context"
	"go-grpc/entity"
)

type DomainUserService interface {
	Create(ctx context.Context, user *entity.User) error
}

type UserService struct {
	DomainUserService DomainUserService
}
