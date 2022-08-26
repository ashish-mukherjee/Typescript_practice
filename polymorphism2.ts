interface Coffee {
  getCost(): number;
  getIngredients(): string;
}

class SimpleCoffee implements Coffee {
  getCost() {
    return 8;
  }

  getIngredients() {
    return "Coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(private readonly decoratedCoffee: Coffee) {}

  getCost() {
    return this.decoratedCoffee.getCost();
  }

  getIngredients() {
    return this.decoratedCoffee.getIngredients();
  }
}

class WithMilk extends CoffeeDecorator {
  constructor(private readonly c: Coffee) {
    super(c);
  }

  getCost() {
    return super.getCost() + 2.5;
  }

  getIngredients() {
    return super.getIngredients() + ", Milk";
  }
}

class WithSprinkles extends CoffeeDecorator {
  constructor(private readonly c: Coffee) {
    super(c);
  }

  getCost() {
    return super.getCost() + 1.7;
  }

  getIngredients() {
    return super.getIngredients() + ", Sprinkles";
  }
}

class WithSugar extends CoffeeDecorator {
  constructor(private readonly c: Coffee) {
    super(c);
  }

  getCost() {
    return super.getCost() + 1;
  }

  getIngredients() {
    return super.getIngredients() + ", Sugar";
  }
}
