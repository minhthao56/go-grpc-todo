CREATE TABLE
    IF NOT EXISTS users (
        user_id serial,
        username VARCHAR (50) UNIQUE NOT NULL,
        password VARCHAR (50) NOT NULL,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL,
        deleted_at TIMESTAMP NOT NULL,
        CONSTRAINT pk__users PRIMARY KEY(user_id)
    );

CREATE TABLE
    IF NOT EXISTS todos (
        todo_id serial,
        user_id INT NOT NULL,
        title TEXT,
        content TEXT,
        is_completed BOOLEAN,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL,
        deleted_at TIMESTAMP NOT NULL,
        CONSTRAINT pk__todos PRIMARY KEY(todo_id),
        CONSTRAINT fk__todos__users FOREIGN KEY(user_id) REFERENCES users(user_id)
    );