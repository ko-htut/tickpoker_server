import * as HTTP from "../../utils/http";
import multer from "multer";
import fs from "fs";
import { v4 } from "uuid";

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
export type Request = HTTP.Request & {};
// レスポンスパラメータ
export type Response = HTTP.Response & {
  msg: string;
};

// テストAPI
export class API implements HTTP.API {
  constructor(public id: string, public file: Express.Multer.File) {}
  // APIの処理
  run(req: Request): Response {
    // アップロード時に付け直された名前
    const filename = this.file.filename;
    // 保存先のディレクトリを作成
    fs.mkdirSync("./mock_file_server/users/" + this.id, {
      recursive: true,
    });
    // ファイルを移動
    fs.renameSync(
      "./upload/" + filename,
      "./mock_file_server/users/" + this.id + "/icon.png"
    );

    return { msg: "アップロードが完了しました" };
  }
}
