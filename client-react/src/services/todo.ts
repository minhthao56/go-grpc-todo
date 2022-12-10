import { TodoServiceClient } from "../packages/todo/TodoServiceClientPb";
import { TodoRequestResponse } from "../packages/todo/todo_pb";

const serviceTodo = new TodoServiceClient(
  "http://" + window.location.hostname + ":8080",
  null,
  null
);

export const addTodo = () => {
  const req = new TodoRequestResponse();
  req.setTitle("Title");
  req.setDescription("TEST");
  req.setIsCompleted(false);

  return serviceTodo.addToDo(req, {});
};
