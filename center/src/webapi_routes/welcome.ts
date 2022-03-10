import * as HTTP from "../../utils/http";

export type Request = HTTP.Request & {};
export type Response = HTTP.Response & {
  msg: string;
};

export class API implements HTTP.API {
  run(req: Request): Response {
    const res = { msg: "Hello Casino+" };
    return res;
  }
}
