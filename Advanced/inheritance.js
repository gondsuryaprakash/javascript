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

// Calling Animal 

const cat = new Animal('Cat');
cat.run(10);
cat.stop();

class Rabit extends Animal {

    hide () {
        console.log(`${this.name} hide in Jhadi.`
        );
    }
}

const rabit = new Rabit('White Rabit');
rabit.run(30);
rabit.hide();