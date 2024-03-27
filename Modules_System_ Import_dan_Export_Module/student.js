// 1️⃣ Cara 1 tanpa menggunakan default, sehingga perlu {} untuk memanggilnya
export class Student {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}



// 2️⃣ Cara 2 menggunakan default, sehingga tidak perlu {} untuk memanggilnya
export default class Student {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

// 3️⃣ Cara jika ada 2 export ( yang satu menggunakan default, dan yang satunya tidak )
export let users = ['sam', 'ben', 'mike']
