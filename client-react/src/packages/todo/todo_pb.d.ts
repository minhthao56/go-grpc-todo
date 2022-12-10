import * as jspb from 'google-protobuf'



export class TodoRequestResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): TodoRequestResponse;

  getDescription(): string;
  setDescription(value: string): TodoRequestResponse;

  getIsCompleted(): boolean;
  setIsCompleted(value: boolean): TodoRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoRequestResponse): TodoRequestResponse.AsObject;
  static serializeBinaryToWriter(message: TodoRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoRequestResponse;
  static deserializeBinaryFromReader(message: TodoRequestResponse, reader: jspb.BinaryReader): TodoRequestResponse;
}

export namespace TodoRequestResponse {
  export type AsObject = {
    title: string,
    description: string,
    isCompleted: boolean,
  }
}

