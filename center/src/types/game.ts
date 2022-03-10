export {
  Card,
  WheelInner,
  WheelOuter,
  Face,
  Mark,
  Combo,
  Step,
  BetLevel,
  Seat,
  InnerSpace,
  OuterSpace,
  SideSpace,
  Board,
};

const Card = {
  As: "As",
  Ah: "Ah",
  Kd: "Kd",
  Kc: "Kc",
  Qs: "Qs",
  Qh: "Qh",
  Qd: "Qd",
  Qc: "Qc",
  Js: "Js",
  Jh: "Jh",
  Jd: "Jd",
  Jc: "Jc",
} as const;
type Card = typeof Card[keyof typeof Card];

const WheelInner = {
  c: "c",
  h: "h",
  z: "z",
  d: "d",
} as const;
type WheelInner = typeof WheelInner[keyof typeof WheelInner];

const WheelOuter = {
  Qd: "Qd",
  Jc: "Jc",
  Ks: "Ks",
  Ah: "Ah",
} as const;
type WheelOuter = typeof WheelOuter[keyof typeof WheelOuter];

const Face = {
  A: "A",
  K: "K",
  Q: "Q",
  J: "J",
} as const;
type Face = typeof Face[keyof typeof Face];

const Mark = {
  s: "s",
  h: "h",
  d: "d",
  c: "c",
  z: "z",
} as const;
type Mark = typeof Mark[keyof typeof Mark];

const Combo = {
  // need 3
  RSF: "RSF",
  SF: "SF",
  FullHouse: "FullHouse",
  Flush: "Flush",
  Straight: "Straight",
  TwoPairs: "TwoPairs",
  // need 2
  KingJoker: "KingJoker",
  FacePair: "FacePair",
  MarkPairMarkPair: "MarkPairMarkPair",
  // need 1
  Joker: "Joker",
  // need 0
  NoPairs: "NoPairs",
} as const;
type Combo = typeof Combo[keyof typeof Combo];

const Step = {
  Bet: "Bet",
  Shuffle: "Shuffle",
  Put: "Put",
  Showdown: "Showdown",
} as const;
type Step = typeof Step[keyof typeof Step];

const BetLevel = {
  Max: "Max",
  Mid: "Mid",
  Min: "Min",
} as const;
type BetLevel = typeof BetLevel[keyof typeof BetLevel];

const Seat = {
  S0: 0,
  S1: 1,
  S2: 2,
  S3: 3,
} as const;
type Seat = typeof Seat[keyof typeof Seat];

class InnerSpace {
  constructor(public seat: Seat, public wheelInner: WheelInner) {}
}

class OuterSpace {
  constructor(public seat: Seat, public wheelOuter: WheelOuter) {}
}

class SideSpace {
  constructor(
    public seat: Seat,
    public step: Step,
    public chip: number,
    public cards: Card[],
    public bet?: BetLevel,
    public put?: Card
  ) {}
}

class Board {
  constructor(
    public innerSpaces: InnerSpace[],
    public outerSpaces: OuterSpace[],
    public sideSpaces: SideSpace[]
  ) {}
}
