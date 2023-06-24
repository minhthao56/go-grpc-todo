package repository

import (
	"context"
	"database/sql"
	"fmt"
	"go-grpc/core/entity"
	"go-grpc/database"
	"strings"
)

type UserRepo interface {
	Create(ctx context.Context, db *sql.DB, user entity.User) error
	GetOneUserByUsername(ctx context.Context, db *sql.DB, username string) (*entity.UserSchema, error)
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
	insertStmt := fmt.Sprintf(`INSERT INTO %s(username, password) values($1, $2)`, e.TableName())
	_, err := db.Exec(insertStmt, user.User.Username(), user.User.Password())

	if err != nil {
		return err
	}
	return nil
}

func (service *UserService) GetOneUserByUsername(ctx context.Context, db *sql.DB, username string) (*entity.UserSchema, error) {
	e := &entity.UserSchema{}

	fields := database.GetFieldNames(e)

	query := `
	SELECT %s FROM %s WHERE username=$1 AND deleted_at IS NULL
	`
	smt := fmt.Sprintf(query, strings.Join(fields, ","), e.TableName())

	row := db.QueryRow(smt, username)

	if err := row.Scan(database.GetScanFields(e, fields)...); err != nil {

		return nil, err
	}
	return e, nil
}
