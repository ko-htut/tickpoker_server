import { Board } from "../types/game";
export { DealerObserver, Dealer };

interface DealerObserver {
  /// showdown
  dealerDidShowdown(dealer: Dealer);
  /// shuffle
  dealerDidShuffle(dealer: Dealer);
}

class Dealer {
  constructor(public observer: DealerObserver, public board: Board) {}

  shuffle() {
    // var shuffledCards = Standard.deck.shuffled()
    // for sideSpace in self.board.sideSpaces {
    //     let cardCount = sideSpace.bet!.cardCount
    //     sideSpace.cards = [Card](shuffledCards.prefix(cardCount))
    //     sideSpace.put = nil
    //     sideSpace.step = .Put
    //     shuffledCards = [Card](shuffledCards.dropFirst(cardCount))
    // }
    // self.observer.dealerDidShuffle(self)
  }

  showdown() {
    // for sideSpace in self.board.sideSpaces {
    //     switch sideSpace.put!.face {
    //     case .A:
    //         break
    //     case .J:
    //         self.rotateInner()
    //     case .Q:
    //         self.rotateOuter()
    //     case .K:
    //         self.rotateInner()
    //         self.rotateOuter()
    //     }
    // }
    // // pay
    // for sideSpace in self.board.sideSpaces {
    //     sideSpace.chip += Combo(
    //         inner: self.board.innerSpace(at: sideSpace.seat).wheelInner,
    //         outer: self.board.outerSpace(at: sideSpace.seat).wheelOuter,
    //         card: sideSpace.put!
    //     ).bonusChip
    //     sideSpace.bet = nil
    //     sideSpace.step = .Bet
    // }
    // self.observer.dealerDidShowdown(self)
  }

  rotateInner() {
    // for innerSpace in self.board.innerSpaces {
    //     let nextValue = innerSpace.seat.rawValue + 1
    //     if nextValue < self.board.innerSpaces.count {
    //         innerSpace.seat = Seat(rawValue: nextValue)!
    //     } else {
    //         innerSpace.seat = .S0
    //     }
    // }
  }

  rotateOuter() {
    // for outerSpace in self.board.outerSpaces {
    //     let nextValue = outerSpace.seat.rawValue + 1
    //     if nextValue < self.board.outerSpaces.count {
    //         outerSpace.seat = Seat(rawValue: nextValue)!
    //     } else {
    //         outerSpace.seat = .S0
    //     }
    // }
  }
}
