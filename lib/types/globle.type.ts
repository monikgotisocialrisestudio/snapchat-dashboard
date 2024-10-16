export type ResponseType<T> = {
  data: T;
  status: true;
  message: string;
};

export type ResponseErrroType = {
  data: {
    status: false;
    message: string;
  };
  status: number;
};

export enum ModelModeType {
  CREATE = "create",
  EDIT = "edit",
}
