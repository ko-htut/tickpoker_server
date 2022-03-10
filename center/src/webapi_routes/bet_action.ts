import * as HTTP from "../../utils/http";

type Request = HTTP.Request & {
  player_id: string;
  bet: string;
};

type Response = HTTP.Response & {};

export class API implements HTTP.API {
  run(req: Request): Response {
    const res = {};
    return res;
  }
}
