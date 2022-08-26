type Colorful = {
  color: string;
};

type Circle = {
  radius: number;
};

type ColorfulCircle = Colorful | Circle; 

function isCircle(circle: ColorfulCircle): circle is Circle {
  return "radius" in circle;
}

function draw(circle: ColorfulCircle) {
  if (isCircle(circle)) {

    console.log(`Radius was ${circle.radius}`); 
  } else {
    console.log(`Color was ${circle.color}`);
  }
}

draw({ color: "blue" });
draw({ radius: 42 });
