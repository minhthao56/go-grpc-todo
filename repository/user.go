package repository

import (
	"context"
	"go-grpc/entity"
)

type UserRepo interface {
	Create(ctx context.Context, user *entity.User) error
}

type UserService struct {
	UserRepo UserRepo
}

type User struct {
	entity.User
}

func (service UserService) Create(ctx context.Context, userData entity.User) error {

	user := &User{
		User: userData,
	}
	if err := entity.ValidUser(user); err != nil {
		return err
	}
	return service.Create(ctx, user)
}
