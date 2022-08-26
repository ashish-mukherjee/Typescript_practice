//encapsulation:
class Base {
    private hiddenA = 0;
    #hiddenB = 0;
   
    printInternals() {
      console.log(this.hiddenA); 
      console.log(this.#hiddenB); 
    }
  }
   
  const obj = new Base();
//  console.log(obj.hiddenA); // these two bomb
//  console.log(obj.#hiddenB);



 

