

export class Animal {
    constructor(type, legs){ // the constructor is simply assigning those values to our variables class, 
                            //the animal class has a type like what we parseing in
        this.type = type;
        this.legs = legs;
    };
    makeNoise(sound = "Loud Noise"){
        console.log(sound);
    }
};