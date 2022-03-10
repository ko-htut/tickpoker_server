import * as HTTP from "../../utils/http";
import * as Model from "../../types/api_models";
import multer from "multer";
import fs from "fs";
import { v4 } from "uuid";
import { request } from "http";
// import * as UserRepository from "../../repositories/user";
// import * as UserOptionRepository from "../../repositories/user_option";
import { User } from "../../types/user";
import { UserOption } from "../../types/user_option";
import { response } from "express";
// import * as UserIconRepository from "../../repositories/user_icon";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    // ファイルを保存するフォルダ
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    // ファイル
    callback(null, v4() + ".png");
  },
});

// 画像アップロード受け取りの設定
export const upload = multer({
  storage: storage,
  limits: { fileSize: 40000 }, // サイズの限界は 40000 Byte
}).single("file");

// リクエストパラメータ
export type Request = HTTP.Request & {
  user: Model.User;
};
// レスポンスパラメータ
export type Response = HTTP.Response & {
  user: Model.User;
};

// API
export class API implements HTTP.API {
  constructor(public file: Express.Multer.File) {}
  // APIの処理
  async run(req: Request): Promise<Response> {
    // メールとニックネームで新しいユーザーを仮作成
    const userRecord: User = new User();
    userRecord.mail = req.user.mail;
    userRecord.nickname = req.user.nickname;
    const userID = ""; // await UserRepository.create(userRecord);

    // アイコンファイルをアップロード
    const localPath = "./upload/" + this.file.filename;
    const fileURL = ""; //UserIconRepository.save(localPath, userID);

    // ユーザーオプション情報を保存
    const userOptionRecord: UserOption = new UserOption();
    // userOptionRecord.user_id = userID;
    userOptionRecord.icon_url = fileURL;
    // await UserOptionRepository.create(userOptionRecord);

    // 決定したIDとアイコンURLで更新
    req.user.id = 0; // userID;
    req.user.icon_url = fileURL;
    const res: Response = { user: req.user };
    return res;
  }
}
