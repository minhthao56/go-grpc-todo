package entity

import (
	"errors"

	"github.com/jackc/pgtype"
)

type User interface {
	Username() string
	Password() string
}

// Thỏa entity.User
type UserToDelegate struct {
	User
}

type UserSchema struct {
	ID        pgtype.Int8 `sql:"user_id,pk"`
	UpdatedAt pgtype.Timestamptz
	CreatedAt pgtype.Timestamptz
	DeletedAt pgtype.Timestamptz
	Username  pgtype.Text
	Password  pgtype.Text
}

func (t *UserSchema) FieldMap() ([]string, []interface{}) {
	return []string{
			"user_id",
			"created_at",
			"updated_at",
			"deleted_at",
			"username",
			"password",
		}, []interface{}{
			&t.ID,
			&t.CreatedAt,
			&t.UpdatedAt,
			&t.DeletedAt,
			&t.Username,
			&t.Password,
		}
}

func (t *UserSchema) TableName() string {
	return "users"
}

// Thỏa entity.User
type EmptyUser struct{}

func (e *EmptyUser) Username() string {
	return ""
}

func (e *EmptyUser) Password() string {
	return ""
}

func ValidUser(user User) error {
	if user.Username() == "" {
		return errors.New("Username can not be empty")
	}
	if user.Password() == "" {
		return errors.New("Password can not be empty")
	}
	return nil
}
