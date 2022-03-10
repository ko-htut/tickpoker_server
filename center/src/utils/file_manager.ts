import fs from "fs";
import * as URLs from "../config/url";

export { move };

// アップロードした先のパスを返す
function move(srcLocalPath: string, distPath: string) {
  // ディレクトリを作成
  fs.mkdirSync(URLs.fileServerBasePath + distPath, {
    recursive: true,
  });
  // ファイルを移動
  fs.renameSync(srcLocalPath, URLs.fileServerBasePath + distPath);
  return;
}
