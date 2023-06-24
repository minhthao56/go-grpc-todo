import { UserServiceClient } from "../packages/pkg/user/UserServiceClientPb";
import { UserAddRequest, UserResponse } from "../packages/pkg/user/user_pb";

export interface UserReq extends UserAddRequest.AsObject {}
export interface UserResp extends UserResponse.AsObject {}

const service = new UserServiceClient(
  "http://" + window.location.hostname + ":8080",
  null,
  null
);

export const addUser = (user: UserReq) => {
  const req = new UserAddRequest();
  req.setUsername(user.username);
  req.setPassword(user.password);
  return service.addUser(req, {});
};
