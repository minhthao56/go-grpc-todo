import { TodoServiceClient } from "../packages/todo/TodoServiceClientPb";
import { TodoRequestResponse } from "../packages/todo/todo_pb";

const serviceTodo = new TodoServiceClient("http://localhost:9090", null, null);

export const addTodo = () => {
  const req = new TodoRequestResponse();
  req.setTitle("Title");
  req.setDescription("TEST");
  req.setIsCompleted(false);

  return serviceTodo.addToDo(req, {});
};
