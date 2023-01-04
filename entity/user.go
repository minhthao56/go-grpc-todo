package entity

import "errors"

type User interface {
	Username() string
	Password() string
}

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
