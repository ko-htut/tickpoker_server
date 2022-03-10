//
//
//

export {
  User,
  Game,
  Player,
  Board,
  BetBox,
  PutBox,
  Dock,
  ShowdownAnimation,
  Score,
};

type User = {
  id: number;
  mail: string;
  nickname: string;
  chip: number;
  symbols: string[];
  icon_url: string;
  self_intro: string;
};

type Game = {
  players: Player[];
  board: Board;
  dock: Dock;
};

type Player = {
  seat: number;
  player_id: string;
  nickname: string;
  icon_url: string;
  step: string;
  chip: number;
};

type Board = {
  bet_boxes: BetBox[];
  put_boxes: PutBox[];
  inner_offset: number;
  outer_offset: number;
};

type BetBox = {
  seat: number;
  bet_level?: string;
};

type PutBox = {
  seat: number;
  has_card: boolean;
};

type Dock = {
  cards: String[];
};

type ShowdownAnimation = {
  seat: number;
  put_card: string;
  old_inner_offset: number;
  new_inner_offset?: number;
  old_outer_offset: number;
  new_outer_offset?: number;
};

type Score = {
  player_id: string;
  nickname: string;
  old_total_chip: number;
  bonus_chip: number;
  new_total_chip: number;
  put_card: string;
  inner: string;
  outer: string;
  combo_name: string;
};

type Announce = {
  announce_type: string;
  trigger_seat?: number;
  showdown_list?: ShowdownAnimation[];
  score_list?: Score[];
  new_player?: Player;
};
