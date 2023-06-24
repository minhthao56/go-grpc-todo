import { TodoServiceClient } from "../packages/pkg/todo/TodoServiceClientPb";
import { TodoAddRequest } from "../packages/pkg/todo/todo_pb";

const serviceTodo = new TodoServiceClient(
  "http://" + window.location.hostname + ":8080",
  null,
  null
);

export const addTodo = () => {
  const req = new TodoAddRequest();
  req.setTitle("Title");
  req.setContent("TEST");
  req.setIsCompleted(false);

  return serviceTodo.addToDo(req, {});
};
