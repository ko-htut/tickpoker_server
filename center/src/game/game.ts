import { Board, Seat, Step } from "../types/game";
import { Dealer, DealerObserver } from "./dealer";
import { Player, PlayerObserver } from "./player";
export { Game, GameObserver };

interface GameObserver {
  roomDidShowdown(game: Game);
  roomDidBet(game: Game, atSeat: Seat);
  roomDidShuffle(game: Game);
  roomDidPut(game: Game, atSeat: Seat);
}

class Game implements DealerObserver, PlayerObserver {
  roomID: string;
  board: Board;
  dealer: Dealer;
  players: Player[];
  observer?: GameObserver;
  monitor?: GameObserver;

  constructor(roomID: string, board: Board) {
    this.roomID = roomID;
    this.board = board;
    this.players = board.sideSpaces.map((space) => new Player(this, space));
    this.dealer = new Dealer(this, board);
  }

  player(atSeat: Seat): Player {
    return this.players.find((p) => p.sideSpace.seat == atSeat);
  }

  /// showdown
  dealerDidShowdown(dealer: Dealer) {
    this.observer?.roomDidShowdown(this);
    this.monitor?.roomDidShowdown(this);
  }

  /// shuffle
  dealerDidShuffle(dealer: Dealer) {
    this.observer?.roomDidShuffle(this);
    this.monitor?.roomDidShuffle(this);
  }
  /// bet
  playerDidBet(player: Player) {
    this.observer?.roomDidBet(this, player.sideSpace.seat);
    this.monitor?.roomDidBet(this, player.sideSpace.seat);
    // 全員のベットが完了しているか確認
    let hasBettingPlayer = this.board.sideSpaces.some(
      (s) => s.step == Step.Bet
    );
    if (hasBettingPlayer) {
      // まだ Bet 中のプレイヤーがいる
    } else {
      // 全プレイヤーの Bet が完了
      // Shuffle開始
      this.dealer.shuffle();
    }
  }

  /// put
  playerDidPut(player: Player) {
    this.observer?.roomDidPut(this, player.sideSpace.seat);
    this.monitor?.roomDidPut(this, player.sideSpace.seat);
    // 全員のプットが完了しているか確認
    let hasPuttingPlayer = this.board.sideSpaces.some(
      (s) => s.step == Step.Put
    );
    if (hasPuttingPlayer) {
      // まだ Put 中のプレイヤーがいる
    } else {
      // 全プレイヤーの Put が完了
      // Showdown開始
      this.dealer.showdown();
    }
  }
}
