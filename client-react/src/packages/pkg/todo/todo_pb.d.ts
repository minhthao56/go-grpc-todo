import * as jspb from 'google-protobuf'



export class TodoAddRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): TodoAddRequest;

  getContent(): string;
  setContent(value: string): TodoAddRequest;

  getIsCompleted(): boolean;
  setIsCompleted(value: boolean): TodoAddRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TodoAddRequest): TodoAddRequest.AsObject;
  static serializeBinaryToWriter(message: TodoAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoAddRequest;
  static deserializeBinaryFromReader(message: TodoAddRequest, reader: jspb.BinaryReader): TodoAddRequest;
}

export namespace TodoAddRequest {
  export type AsObject = {
    title: string,
    content: string,
    isCompleted: boolean,
  }
}

export class TodoResponse extends jspb.Message {
  getTodoId(): number;
  setTodoId(value: number): TodoResponse;

  getTitle(): string;
  setTitle(value: string): TodoResponse;

  getContent(): string;
  setContent(value: string): TodoResponse;

  getIsCompleted(): boolean;
  setIsCompleted(value: boolean): TodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoResponse): TodoResponse.AsObject;
  static serializeBinaryToWriter(message: TodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoResponse;
  static deserializeBinaryFromReader(message: TodoResponse, reader: jspb.BinaryReader): TodoResponse;
}

export namespace TodoResponse {
  export type AsObject = {
    todoId: number,
    title: string,
    content: string,
    isCompleted: boolean,
  }
}

export class TodoResponses extends jspb.Message {
  getDataList(): Array<TodoResponse>;
  setDataList(value: Array<TodoResponse>): TodoResponses;
  clearDataList(): TodoResponses;
  addData(value?: TodoResponse, index?: number): TodoResponse;

  getPagination(): GetToDoRequest | undefined;
  setPagination(value?: GetToDoRequest): TodoResponses;
  hasPagination(): boolean;
  clearPagination(): TodoResponses;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoResponses.AsObject;
  static toObject(includeInstance: boolean, msg: TodoResponses): TodoResponses.AsObject;
  static serializeBinaryToWriter(message: TodoResponses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoResponses;
  static deserializeBinaryFromReader(message: TodoResponses, reader: jspb.BinaryReader): TodoResponses;
}

export namespace TodoResponses {
  export type AsObject = {
    dataList: Array<TodoResponse.AsObject>,
    pagination?: GetToDoRequest.AsObject,
  }
}

export class GetToDoRequest extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): GetToDoRequest;

  getLimit(): number;
  setLimit(value: number): GetToDoRequest;

  getOffset(): number;
  setOffset(value: number): GetToDoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetToDoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetToDoRequest): GetToDoRequest.AsObject;
  static serializeBinaryToWriter(message: GetToDoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetToDoRequest;
  static deserializeBinaryFromReader(message: GetToDoRequest, reader: jspb.BinaryReader): GetToDoRequest;
}

export namespace GetToDoRequest {
  export type AsObject = {
    keyword: string,
    limit: number,
    offset: number,
  }
}

export class GetOneToDoResquest extends jspb.Message {
  getTodoId(): string;
  setTodoId(value: string): GetOneToDoResquest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOneToDoResquest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOneToDoResquest): GetOneToDoResquest.AsObject;
  static serializeBinaryToWriter(message: GetOneToDoResquest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOneToDoResquest;
  static deserializeBinaryFromReader(message: GetOneToDoResquest, reader: jspb.BinaryReader): GetOneToDoResquest;
}

export namespace GetOneToDoResquest {
  export type AsObject = {
    todoId: string,
  }
}

export class DeleteToDoResquest extends jspb.Message {
  getTodoId(): string;
  setTodoId(value: string): DeleteToDoResquest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteToDoResquest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteToDoResquest): DeleteToDoResquest.AsObject;
  static serializeBinaryToWriter(message: DeleteToDoResquest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteToDoResquest;
  static deserializeBinaryFromReader(message: DeleteToDoResquest, reader: jspb.BinaryReader): DeleteToDoResquest;
}

export namespace DeleteToDoResquest {
  export type AsObject = {
    todoId: string,
  }
}

export class EditTodDoResquest extends jspb.Message {
  getTodoId(): number;
  setTodoId(value: number): EditTodDoResquest;

  getTitle(): string;
  setTitle(value: string): EditTodDoResquest;

  getContent(): string;
  setContent(value: string): EditTodDoResquest;

  getIsCompleted(): boolean;
  setIsCompleted(value: boolean): EditTodDoResquest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditTodDoResquest.AsObject;
  static toObject(includeInstance: boolean, msg: EditTodDoResquest): EditTodDoResquest.AsObject;
  static serializeBinaryToWriter(message: EditTodDoResquest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditTodDoResquest;
  static deserializeBinaryFromReader(message: EditTodDoResquest, reader: jspb.BinaryReader): EditTodDoResquest;
}

export namespace EditTodDoResquest {
  export type AsObject = {
    todoId: number,
    title: string,
    content: string,
    isCompleted: boolean,
  }
}

