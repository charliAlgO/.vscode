import { Animal } from "./animal.mjs";
let cat = new Animal("cat", 4);
cat.legs = 3;
cat.makeNoise("meow");
console.log(cat.legs);
