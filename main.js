// 1️⃣ Contoh Sederhana Callback (Didalam function memanggil function lain)
function callData(callback) {
    console.log('ini function call data')
    callback()
}

function showData() {
    console.log('ini function show data')
}

callData(showData) // 📝 Pada baris ini lah peran callback digunakan, yaitu memberikan parameter function yang akan dipanggil
                   // 📝 CallData di panggil dengan membawa function showData (callback == showData)



// 2️⃣ Callback untuk merge data
let defaultsStudent = ['ben', 'josh', 'meg']
//⚙️ Contoh Studi Kasus Sederhana merge data student ⬇️
// studentFromDatabase + defaultStudent
// function get data from database
function getDataFromDatabase(callback) {
    setTimeout(() => {
        let students = ['bob', 'todd', 'jill']

        callback(students) // 💡 Parameter tersebut harus sama dengan variable yang menyimpan data datanya
                           //     Contoh nya let students == maka parameter nya harus students
    }, 2000);
}

// function gabung data default + data dari database
function mergeStudent(data) { // 💡 Data adalah parameter yang menuju ke students
    let result = defaultsStudent.concat(data)
    console.log(result);
    // ❗ Maka jika di baca alur programnya akan seperti ini :
    //     -> Memanggil function getDataFromDatabase(dengan membawa parameter mergeStudent) 
    //     -> Kemudian proses pengolahan dari database, dan di simpan ke variable students dan callback (student) 
    //     -> Terakhir memanggil function mergeStudent dengan parameter data yang menuju ke students, dan dilakukan penggabungan data defaultStudent dengan student menggunakan function Concat
}

getDataFromDatabase(mergeStudent)