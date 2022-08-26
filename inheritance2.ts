abstract class Box {
  content: string = "";

  sameAs(other: this) {
    return other.content === this.content;
  }

  isDerivedBox(): this is DerivedBox {
    return this instanceof DerivedBox;
  }
}

class DerivedBox extends Box {
  otherContent: string = "?";
}

// const base = new Box(); // bombs
const derived = new DerivedBox();
derived.isDerivedBox(); // true
// derived.sameAs(derived as Box); // bombs
