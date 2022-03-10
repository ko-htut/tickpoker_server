const MongoClient = require("mongodb").MongoClient;
import * as Config from "./config";

export function testMongo() {
  let uri = "";
  if (Config.flavor == "staging") {
    // staging
    uri = `${Config.mongoDB.scheme}://${Config.mongoDB.user_name}:${Config.mongoDB.password}@${Config.mongoDB.host}/${Config.mongoDB.db_name}?retryWrites=true&w=majority`;
  } else {
    // develop
    uri = `${Config.mongoDB.scheme}://${Config.mongoDB.user_name}:${Config.mongoDB.password}@${Config.mongoDB.host}/`;
  }
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect(async (err) => {
    const db = client.db(Config.mongoDB.db_name);
    const collection = db.collection("grids");
    const documents = [{ a: 1 }, { a: 2 }, { a: 3 }];
    collection.insertMany(documents, (err, result) => {
      console.log(result);
      client.close();
    });
  });
}
