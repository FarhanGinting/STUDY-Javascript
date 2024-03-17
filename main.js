// 1️⃣ Syntax & Contoh Class Inheritance
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} Makes A Sound.`)
    }

    move(){
        console.log(`${this.name}  Makes A Move`)
    }
}

class Dog extends Animal {              //💡 Kelas Dog punya parent Animal (Di tandai dengan Kata Kunci = "extends" )

}

let dog = new Dog('Bob')
dog.speak()
dog.move()



// 2️⃣ Membuat Function di class turunan
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} Makes A Sound.`)
    }

    move(){
        console.log(`${this.name}  Makes A Move`)
    }
}

class Dog extends Animal {
    jump(){
        console.log((`${this.name} jumps with happay Face`));
    }
    speak(){
        super.speak()
        console.log((`${this.name} is barking right now`));
    }
}

let dog = new Dog('Bob')
dog.speak()
dog.move()
dog.jump()



// 3️⃣ Override Constructor
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} Makes A Sound.`)
    }

    move(){
        console.log(`${this.name}  Makes A Move`)
    }
}
class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
    jump(){
        console.log((`${this.name} wich breed is ${this.breed} jumping with happay Face`));
    }
    speak(){
        super.speak()
        console.log((`${this.name} is barking right now`));
    }
}

let dog = new Dog('Bob', 'Chihuahua')
dog.speak()
dog.move()
dog.jump()
console.log(dog.breed)
