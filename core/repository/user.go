package repository

import (
	"context"
	"database/sql"
	"fmt"
	"go-grpc/core/entity"
)

type UserRepo interface {
	Create(ctx context.Context, db *sql.DB, user entity.User) error
}

type UserService struct {
	UserRepo UserRepo
}

func (service *UserService) Create(ctx context.Context, db *sql.DB, userData entity.User) error {

	user := &entity.UserToDelegate{
		User: userData,
	}
	if err := entity.ValidUser(user); err != nil {
		return err
	}
	e := &entity.UserSchema{}

	insertStmt := fmt.Sprintf(`INSERT INTO %s(%s, %s) values($1, $2)`, e.TableName(), e.Username.String, e.Password.String)
	_, err := db.Exec(insertStmt, user.User.Password(), user.User.Username())

	if err != nil {
		return err
	}

	return service.Create(ctx, db, user)
}
