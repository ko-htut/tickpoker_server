require("dotenv").config();

// .env ファイルから flavor を読み込む
// 読み込めない場合は develop 環境とする
export const flavor = process.env["FLAVOR"] || "develop";

type MongoDB = {
  scheme: string;
  user_name: string;
  password: string;
  host: string;
  db_name: string;
};

type DropBox = {
  token: string;
};

export const mongoDB: MongoDB = (() => {
  if (flavor == "staging") {
    // STAGING
    return {
      scheme: "mongodb+srv",
      user_name: process.env["MONGODB_USER_NAME"],
      password: process.env["MONGODB_PASSWORD"],
      host: process.env["MONGODB_HOST"],
      db_name: "casinoplus",
    };
  } else {
    // DEVELOP
    return {
      scheme: "mongodb",
      user_name: "admin",
      password: "pass",
      host: "mongo:27017",
      db_name: "db",
    };
  }
})();

export const dropBox: DropBox = (() => {
  if (flavor == "staging") {
    // STAGING
    return {
      token: process.env["DROPBOX_TOKEN"],
    };
  } else {
    // DEVELOP
    return {
      token: "",
    };
  }
})();
