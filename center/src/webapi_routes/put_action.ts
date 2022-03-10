import * as HTTP from "../../utils/http";
import * as APIModel from "../../types/api_models";

type Request = HTTP.Request & {
  player_id: string;
  put: string;
};

type Response = HTTP.Response & {};

export class API implements HTTP.API {
  run(req: Request): Response {
    const res = {};
    return res;
  }
}
