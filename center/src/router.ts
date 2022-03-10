import { Express, Request, Response } from "express";
import fs from "fs";
import * as Http from "../utils/http";
// routes
import * as RemenberPlayerID from "./routes/remember_player_id";
import * as JoinRoom from "./routes/join_room";
import * as BetAction from "./routes/bet_action";
import * as PutAction from "./routes/put_action";
import * as Welcome from "./routes/welcome";
import * as PostTest from "./routes/post_test";
import * as LoadGame from "./routes/load_game";
import * as UploadUserIcon from "./routes/upload_user_icon";
import * as CreateUser from "./routes/create_user";
import * as APIModel from "../types/api_models";

// routing
export function run(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    const api = new Welcome.API();
    runAPI(api, req, res);
  });
  app.post("/test/:id", (req: Request, res: Response) => {
    const api = new PostTest.API(req.params.id);
    runAPI(api, req, res);
  });
  app.get("/game/remenber-player-id", (req: Request, res: Response) => {
    const api = new RemenberPlayerID.API();
    runAPI(api, req, res);
  });
  app.post("/game/join-room", (req: Request, res: Response) => {
    const api = new JoinRoom.API();
    runAPI(api, req, res);
  });
  app.post("/game/put-action", (req: Request, res: Response) => {
    const api = new PutAction.API();
    runAPI(api, req, res);
  });
  app.post("/game/bet-action", (req: Request, res: Response) => {
    const api = new BetAction.API();
    runAPI(api, req, res);
  });
  app.get("/game/load-game", (req: Request, res: Response) => {
    const api = new LoadGame.API();
    runAPI(api, req, res);
  });

  // ユーザーアイコンをアップロードされたとき
  // cURLで確認する例 curl -X POST -F file=@./casitus.png -H "Content-Type:multipart/form-data" http://localhost:3000/users/0/icon
  app.post("/users/:id/icon", UploadUserIcon.upload, (req, res) => {
    const api = new UploadUserIcon.API(req.params.id, req.file);
    runAPI(api, req, res);
  });

  // ユーザーアイコンを要求されたとき
  // ブラウザから見る例 http://localhost:3000/users/0/icon.png
  app.get("/users/:id/icon.png", (req, res) => {
    const image = "./mock_file_server/users/" + req.params.id + "/icon.png";
    const data = fs.readFileSync(image);
    res.type("png");
    res.send(data);
  });

  // 新規ユーザー登録
  app.post(
    "/users",
    CreateUser.upload,
    async (request: Request, response: Response) => {
      const file = request.file;
      const json = request.body["json"];

      const reqBody: CreateUser.Request = JSON.parse(json);
      const api = new CreateUser.API(file);
      const resBody = await api.run(reqBody);

      response.json(resBody);
    }
  );
}

// APIを稼働する
function runAPI(api: Http.API, req: Request, res: Response) {
  const json = JSON.stringify(req.body);
  const reqBody: Http.Request = JSON.parse(json);
  const resBody = api.run(reqBody);
  res.json(resBody);
}
