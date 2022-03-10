import * as HTTP from "../../utils/http";

type Request = HTTP.Request & {
  user_id: string;
};

type Response = HTTP.Response & {
  player_id: string;
};

export class API implements HTTP.API {
  run(req: Request): Response {
    const res = { player_id: "スタブ" };
    return res;
  }
}
