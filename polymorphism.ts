interface GenericAdd<T> {
    add: (x: T, y: T) => T;
  }
   
  class GenericNumber implements GenericAdd<number> {
    add(x: number, y: number) {
      return x + y;
    } 
  }
   
  class GenericString implements GenericAdd<string> {
    add(x: string, y: string) {
      return x + y;
    } 
  }
   
  const genericNumber = new GenericNumber();
  genericNumber.add(1, 2); 
   
  const genericString = new GenericString();
  genericString.add("Hello", ", Mammals!"); 