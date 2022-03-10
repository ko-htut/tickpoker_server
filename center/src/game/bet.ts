import { BetLevel } from "../types/game";
export { chipCount, cardCount };

function chipCount(level: BetLevel): number {
  switch (level) {
    case BetLevel.Max:
      return 12;
    case BetLevel.Mid:
      return 9;
    case BetLevel.Min:
      return 5;
  }
}

function cardCount(level: BetLevel): number {
  switch (level) {
    case BetLevel.Max:
      return 3;
    case BetLevel.Mid:
      return 2;
    case BetLevel.Min:
      return 1;
  }
}
