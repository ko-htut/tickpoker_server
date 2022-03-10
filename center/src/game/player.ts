import { BetLevel, Card, SideSpace, Step } from "../types/game";
import { chipCount } from "./bet";
export { PlayerObserver, Player };

interface PlayerObserver {
  /// bet
  playerDidBet(player: Player);
  /// put
  playerDidPut(player: Player);
}

class Player {
  constructor(public observer: PlayerObserver, public sideSpace: SideSpace) {}

  bet(level: BetLevel) {
    this.sideSpace.bet = level;
    this.sideSpace.chip -= chipCount(level);
    this.sideSpace.step = Step.Shuffle;
  }

  put(card: Card) {
    this.sideSpace.put = card;
    this.sideSpace.cards = this.sideSpace.cards.filter((c) => c != card);
    this.sideSpace.step = Step.Showdown;
  }
}
