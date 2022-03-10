import * as HTTP from "../../utils/http";

// リクエストパラメータ
export type Request = HTTP.Request & {
  param: string;
};
// レスポンスパラメータ
export type Response = HTTP.Response & {
  param: string;
};

// テストAPI
export class API implements HTTP.API {
  // 動的ルーティングで受け取りたい値をコンストラクタに設定する
  // HTTP://localhost/test/7 の場合は「7」
  id: string;
  constructor(id: string) {
    this.id = id;
  }
  // APIの処理
  run(req: Request): Response {
    // リクエストのパラメータを参照
    console.log(req.param);
    // レスポンスを作成
    const res = { param: "これはレスポンスのパラメータです" };
    // レスポンスを返す
    return res;
  }
}
