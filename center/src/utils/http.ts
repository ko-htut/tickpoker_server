// リクエストボディの必須パラメーター
export interface Request {
  // 特になし
}
// レスポンスボディの必須パラメーター
export interface Response {
  // 特になし
}
// 抽象API
export interface API {
  run(req: Request): Response;
}
