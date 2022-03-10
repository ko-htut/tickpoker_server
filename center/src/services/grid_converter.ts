import { Game } from "../game/game";
import {
  InnerSpace,
  OuterSpace,
  SideSpace,
  Board,
  Seat,
  Step,
  Card,
  BetLevel,
  WheelOuter,
  WheelInner,
} from "../types/game";
import { Grid } from "../types/grid";

function grids(game: Game): Grid[] {
  let grids = game.board.sideSpaces.map(function (space) {
    let playerID = game.roomID + "S" + String(space.seat);
    let bet = space.bet ?? "";
    let put = space.put ?? "";
    let wheelInner = game.board.innerSpaces.find(
      (s) => s.seat == space.seat
    ).wheelInner;
    let wheelOuter = game.board.outerSpaces.find(
      (s) => s.seat == space.seat
    ).wheelOuter;
    let cards = space.cards.join(",");

    let grid = new Grid();
    grid.id = playerID;
    grid.player_id = playerID;
    grid.room_id = game.roomID;
    grid.seat = space.seat;
    grid.chip = space.chip;
    grid.wheel_inner = wheelInner;
    grid.wheel_outer = wheelOuter;
    grid.cards = cards;
    grid.bet = bet;
    grid.put = put;
    grid.step = space.step;
    grid.created_at = "test";
    grid.updated_at = "test";

    return grid;
  });

  return grids;
}

function game(grids: Grid[]): Game {
  // Room ID
  let roomID = grids[0].room_id;

  // Wheel
  let innerSpaces = grids.map(function (grid) {
    return new InnerSpace(Seat[grid.seat], WheelInner[grid.wheel_inner]);
  });
  let outerSpaces = grids.map(function (grid) {
    return new OuterSpace(Seat[grid.seat], WheelOuter[grid.wheel_outer]);
  });

  // Sides
  let sideSpaces = grids.map(function (grid) {
    let seat = Seat[grid.seat];
    let put = grid.put;
    let bet = grid.bet;
    let step = grid.step;
    let chip = grid.chip;
    let cards = grid.cards.split(",").map((c) => Card[c]);

    return new SideSpace(
      seat,
      Step[step],
      chip,
      cards,
      Card[put],
      BetLevel[bet]
    );
  });

  let board = new Board(innerSpaces, outerSpaces, sideSpaces);

  return new Game(roomID, board);
}
