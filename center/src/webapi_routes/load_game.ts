import * as Http from "../../utils/http";
import * as APIModel from "../../types/api_models";

type Request = Http.Request & {
  player_id: string;
  bet: string;
};

type Response = Http.Response & {
  game: APIModel.Game;
};

export class API implements Http.API {
  run(req: Request): Response {
    const players: APIModel.Player[] = [];
    const betBoxes: APIModel.BetBox[] = [];
    const putBoxes: APIModel.PutBox[] = [];
    const game: APIModel.Game = {
      players: players,
      board: {
        bet_boxes: betBoxes,
        put_boxes: putBoxes,
        inner_offset: 90,
        outer_offset: 180,
      },
      dock: {
        cards: [],
      },
    };
    const res = { game: game };
    return res;
  }
}
