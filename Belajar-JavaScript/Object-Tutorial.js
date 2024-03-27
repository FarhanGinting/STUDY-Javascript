// 1️⃣ Syntax object
// 📝 Dalam Object selalu ada Properties yang bentuknya Key dan Value
// 📝 Dalam Object juga bisa ada Function

    // Cara Penulisan Yang Pertama 💡
    let testObj = new Object()

    // Cara Penulisan Yang Kedua 💡 
    let user = {
        name : 'John', // <= 🕯️ Penjelasannya seperti ini
//                                ==> Name = "Key"
//                                ==> Ben  = "Value"
        age : 20,
        sayHello(){
            alert('Hello')
        }
    }

// 🚨 Cara Mengambil Data Dalam Object dengan memanggil "Nama Variable Obejct" titik "Nama Properties(Key)"
// alert(user.name)

// 🚨 Cara Mengambil Function Dalam Object dengan memanggil "Nama Variable Obejct" titik "Nama Function"
// user.sayHello()

// 2️⃣ Menambah & Menghapus Property Object
    // Menambah Property ➕
        user.gender = 'male';
        alert(user.gender)
    // Menghapus Property 🗑️
        delete user.age
        alert(user.age)

// 3️⃣ Property shorthand pada object
//📝 Jika isi value nya di wakilkan oleh variable yang nama variable tersebut sama dengan nama key maka bisa di tulis seperti di bawah ini
let name = 'Jane'
let age = 18

let user = {
    name,
    age,
    sayHello(){
        alert('Hallo')
    }
}

alert(user.name)
alert(user.age)

//4️⃣ Menduplikasi object
let user2 = Object.assign({}, user) 
user2.name = 'Tono'
user2.age = 22

alert(user.name)
alert(user.age)
alert(user2.name)
alert(user2.age) 

// 5️⃣ Objet Reference
let user2 = user
user2.name = 'Ahwan'
user2.age = 99

alert(user.name)
alert(user.age)
alert(user2.name)
alert(user2.age) 
