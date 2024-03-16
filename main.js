// 1️⃣ Syntax Class Definition
class User {
    // 💡 constructor digunakan untuk perancangan
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // 🟢 Setelah menuliskan constructor kita bisa menggunakan data data yang ada ke dalam function
    SayHi(){
        console.log('hello '+this.name)
        console.log('umur nya '+this.age)
    }
}
let ben = new User('ben', 19)
ben.SayHi()



// 2️⃣ class expression
let expression = class {

    constructor(name, age){
        this.name = name
        this.age = age
    }

    SayHi(){
        console.log('hello '+this.name)
        console.log('umur nya '+this.age)
    }
}
let ben = new expression ('ben', 21) // 💡 Jika menggunakan expression harus di perhatikan new nya mengikuti nama varibale yang di gunakan
ben.SayHi()



// 3️⃣ getter & setter pada class
// 📝 getter == Mendapatkan sebuah Value
// 📝 setter  == Membuat sebuah Value
let expression = class {
    constructor(name, age) {
    this._name = name;
    this._age = age;
    }

    SayHi() {
    console.log("hello " + this._name)
    console.log("umur nya " + this._age)
    }

    get name() {
        return this._name
    }
    get age() {
        return this._age
    }
    set name(Value){
        this._name = Value
    }
    set age(Value){
        this._age = Value
    }
};

// let ben = new expression ('ben', 21); // ⚙️ Cara constructor | 💡 ketika tidak menggunakan getter & setter pada class 
// ben.SayHi()                           //   kita tidak perlu lagi mengirimkan data ke parameter

let ben = new expression();              // ⚙️ Cara getter & setter |💡 Ketika sudah mengg getter & setter pada class
ben.name = 'ben'             
ben.age = 19            //     cukup langsung akses properties nya dan kasih value
ben.SayHi();                            
