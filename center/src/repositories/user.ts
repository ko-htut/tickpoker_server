// import { resolve } from "path/posix";
// import { createConnection, getRepository, getConnectionManager } from "typeorm";
// import { options } from "../config/db";
// import { User } from "../types/user";

// export { create, readById, update, deleteById };

// // CREATE
// function create(user: User): Promise<number> {
//   return new Promise((resolve, reject) => {
//     createConnection(options)
//       .then(async (connection) => {
//         await connection.manager.save(user);
//         resolve(user.id);
//       })
//       .catch(async (error) => {
//         if (error.name === "AlreadyHasActiveConnectionError") {
//           const existentConn = getConnectionManager().get("default");
//           await existentConn.manager.save(user);
//           resolve(user.id);
//         }
//       });
//   });
// }

// // READ
// function readById(id: number, callback: (user: User) => void) {
//   createConnection(options)
//     .then(async (connection) => {
//       const repository = getRepository(User);
//       let user = await repository.findOne(id);
//       callback(user);
//     })
//     .catch((error) => console.log(error));
// }

// // UPDATE
// function update(user: User) {
//   createConnection(options)
//     .then(async (connection) => {
//       await connection.manager.save(user);
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
