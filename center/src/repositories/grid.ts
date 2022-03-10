// import { createConnection, getRepository } from "typeorm";
// import { config } from "../config/db";
// import { Grid } from "../types/grid";

// // CREATE
// export function create(grid: Grid) {
//   createConnection(config)
//     .then(async (connection) => {
//       await connection.manager.save(grid);
//     })
//     .catch((error) => console.log(error));
// }

// // READ
// export function readById(id: number, callback: (grid: Grid) => void) {
//   createConnection(config)
//     .then(async (connection) => {
//       const repository = getRepository(Grid);
//       let grid = await repository.findOne(id);
//       callback(grid);
//     })
//     .catch((error) => console.log(error));
// }

// // SEARCH
// export function readByXXXId(xxxId: number, callback: (grids: Grid[]) => void) {
//   createConnection(config)
//     .then(async (connection) => {
//       const repository = getRepository(Grid);
//       let grids = await repository.find({
//         player_id: xxxId,
//       });
//       callback(grids);
//     })
//     .catch((error) => console.log(error));
// }

// // UPDATE
// export function update(grids: Grid[]) {
//   createConnection(config)
//     .then(async (connection) => {
//       await connection.manager.save(grids);
//     })
//     .catch((error) => console.log(error));
// }

// // DELETE
// export function deleteById(id: number) {
//   createConnection(config)
//     .then(async (connection) => {
//       await connection.manager.remove(id);
//     })
//     .catch((error) => console.log(error));
// }
