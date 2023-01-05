import * as jspb from 'google-protobuf'



export class UserAddRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UserAddRequest;

  getPassword(): string;
  setPassword(value: string): UserAddRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserAddRequest): UserAddRequest.AsObject;
  static serializeBinaryToWriter(message: UserAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAddRequest;
  static deserializeBinaryFromReader(message: UserAddRequest, reader: jspb.BinaryReader): UserAddRequest;
}

export namespace UserAddRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class UserResponse extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserResponse;

  getUsername(): string;
  setUsername(value: string): UserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    userId: number,
    username: string,
  }
}

export class UserResponses extends jspb.Message {
  getDataList(): Array<UserResponse>;
  setDataList(value: Array<UserResponse>): UserResponses;
  clearDataList(): UserResponses;
  addData(value?: UserResponse, index?: number): UserResponse;

  getPagination(): GetUserRequest | undefined;
  setPagination(value?: GetUserRequest): UserResponses;
  hasPagination(): boolean;
  clearPagination(): UserResponses;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponses.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponses): UserResponses.AsObject;
  static serializeBinaryToWriter(message: UserResponses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponses;
  static deserializeBinaryFromReader(message: UserResponses, reader: jspb.BinaryReader): UserResponses;
}

export namespace UserResponses {
  export type AsObject = {
    dataList: Array<UserResponse.AsObject>,
    pagination?: GetUserRequest.AsObject,
  }
}

export class GetUserRequest extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): GetUserRequest;

  getLimit(): number;
  setLimit(value: number): GetUserRequest;

  getOffset(): number;
  setOffset(value: number): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    keyword: string,
    limit: number,
    offset: number,
  }
}

export class GetOneUserResquest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetOneUserResquest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOneUserResquest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOneUserResquest): GetOneUserResquest.AsObject;
  static serializeBinaryToWriter(message: GetOneUserResquest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOneUserResquest;
  static deserializeBinaryFromReader(message: GetOneUserResquest, reader: jspb.BinaryReader): GetOneUserResquest;
}

export namespace GetOneUserResquest {
  export type AsObject = {
    userId: string,
  }
}

export class EditUserResquest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): EditUserResquest;

  getUsername(): string;
  setUsername(value: string): EditUserResquest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditUserResquest.AsObject;
  static toObject(includeInstance: boolean, msg: EditUserResquest): EditUserResquest.AsObject;
  static serializeBinaryToWriter(message: EditUserResquest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditUserResquest;
  static deserializeBinaryFromReader(message: EditUserResquest, reader: jspb.BinaryReader): EditUserResquest;
}

export namespace EditUserResquest {
  export type AsObject = {
    userId: number,
    username: string,
  }
}

