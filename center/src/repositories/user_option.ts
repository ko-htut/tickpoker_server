// import { createConnection, getRepository, getConnectionManager } from "typeorm";
// import { options } from "../config/db";
// import { UserOption } from "../types/user_option";

// export { create, readById, update, deleteById };

// // CREATE
// function create(userOption: UserOption): Promise<number> {
//   return new Promise((resolve, reject) => {
//     createConnection(options)
//       .then(async (connection) => {
//         await connection.manager.save(userOption);
//         resolve(userOption.id);
//       })
//       .catch(async (error) => {
//         if (error.name === "AlreadyHasActiveConnectionError") {
//           const existentConn = getConnectionManager().get("default");
//           await existentConn.manager.save(userOption);
//           resolve(userOption.id);
//         } else {
//           console.log("予期せぬエラーが発生しました", error);
//         }
//       });
//   });
// }

// // READ
// function readById(id: number, callback: (userOption: UserOption) => void) {
//   createConnection(options)
//     .then(async (connection) => {
//       const repository = getRepository(UserOption);
//       let userOption = await repository.findOne(id);
//       callback(userOption);
//     })
//     .catch((error) => console.log(error));
// }

// // UPDATE
// function update(userOption: UserOption) {
//   createConnection(options)
//     .then(async (connection) => {
//       await connection.manager.save(userOption);
//     })
//     .catch((error) => console.log(error));
// }

// // DELETE
// function deleteById(id: number) {
//   createConnection(options)
//     .then(async (connection) => {
//       await connection.manager.remove(id);
//     })
//     .catch((error) => console.log(error));
// }
