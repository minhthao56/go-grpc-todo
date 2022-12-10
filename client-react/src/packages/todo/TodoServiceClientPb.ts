/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as todo_todo_pb from '../todo/todo_pb';


export class TodoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAddToDo = new grpcWeb.MethodDescriptor(
    '/TodoService/AddToDo',
    grpcWeb.MethodType.UNARY,
    todo_todo_pb.TodoRequestResponse,
    todo_todo_pb.TodoRequestResponse,
    (request: todo_todo_pb.TodoRequestResponse) => {
      return request.serializeBinary();
    },
    todo_todo_pb.TodoRequestResponse.deserializeBinary
  );

  addToDo(
    request: todo_todo_pb.TodoRequestResponse,
    metadata: grpcWeb.Metadata | null): Promise<todo_todo_pb.TodoRequestResponse>;

  addToDo(
    request: todo_todo_pb.TodoRequestResponse,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: todo_todo_pb.TodoRequestResponse) => void): grpcWeb.ClientReadableStream<todo_todo_pb.TodoRequestResponse>;

  addToDo(
    request: todo_todo_pb.TodoRequestResponse,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: todo_todo_pb.TodoRequestResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/TodoService/AddToDo',
        request,
        metadata || {},
        this.methodInfoAddToDo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/TodoService/AddToDo',
    request,
    metadata || {},
    this.methodInfoAddToDo);
  }

}

