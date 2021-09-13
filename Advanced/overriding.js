class Animal {
    constructor (name) {
        this.name = name;
        this.speed = 0;
    }

    run (speed) {
        this.speed = speed;
        console.log(`${this.name} run at speed of ${this.speed}`);
    } 

    stop (){
        this.speed =0;
        console.log(`${this.name} stop with the ${this.speed}`);
    }
}

class Rabbit extends Animal {

    hides () {
        console.log(`${this.name} hides`);
    }
    
    stop () {
        super.stop();
        this.hides();
    }

}

const  rabit = new Rabbit('Black Rabbit');
rabit.stop();
