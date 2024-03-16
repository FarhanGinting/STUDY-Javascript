// 1️⃣ Keyword this dalam Object
let user = {
    firsName : 'Ben',
    lastName : 'Ten',
    getFullname(){
        return this.firsName + ' ' + this.lastName    // 💡 this Biasanya berada di dalam Function
                                                      // 📝 this pada contoh di samping merujuk ke user
                                                      //     Sehingga bisa di baca this.firname == user.firsName

        return this                                   // 💡 Jika hanya menuliskan this. maka akan mengembalikan semua properties yang ada di object
    }
}
console.log(user.getFullname())



// 2️⃣ Keyword this dalam Global Function
function testFunction() {                               // 💡 Jika menggunakan this bukan di dalam object maka this tersebut merujuk ke level di atasnya object (Windows)
    return this 
}

// 🤔 Walaupun this tersebut berada di global function tetap saja tidak bisa mengambil global variable
// Contohnya seperti di bawah ini : 
let age = 19

function testFunction() {                               // 💡 Jika menggunakan this bukan di dalam object maka this tersebut merujuk ke level di atasnya object (Windows)
    return this.age                                     // ❌ Akan Muncul Pesan error Undefined
    return age                                          // ✅ Tidak akan error
}
console.log(testFunction())



// 3️⃣ Keyword this untuk mencegah salah akses property
let firsName = 'Josh'
let lastName = 'Pratama'

let user = {
        firsName : 'Ben',
        lastName : 'Ten',
        getFullname(){
            return this.firsName + ' ' + this.lastName  // 💡 Maksud salah propery adalah. jika anda sudah tau keyword This akan paham bagaimana untuk mengakses 'Ben' dan 'Ten'            
            return firsName + ' ' + lastName            // 📝 Namun jika belum paham this, dan anda memanggil nya dengan cara seperti si samping, maka yang di ambil datanya adalah 'Josh' dan 'Pratama'

        }
    }
console.log(user.getFullname())

// 4️⃣ Keyword this di arrow function
let firsName = 'Josh'
let lastName = 'Pratama'

let user = {
        firsName : 'Ben',
        lastName : 'Ten',
        getFullname : () => this.firsName+' '+this.lastName // ❌ Kode salah Karena 💡 Dalam arrow function, anda tidak bisa sembarangan menggunakan keyword this
                                                            // 📝 Yang jelas this pada arrow function, tidak merujuk ke object namun ke windows (Level di atas object)                                                            

        getFullname : () => user.firsName                   // ✅ Kode benar Karena 💡 Untuk Arrow Function harus menuliskan nama object nya, tidak bisa menggunakan this

        getFullname : () => firsName                         // ⚙️ Sedangkan untuk memanggil variable global bisa langsung menuliskan nama variable nya saja

    }
console.log(user.getFullname())