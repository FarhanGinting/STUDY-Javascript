// 1️⃣ Study Kasus (Menghitung total siswa dari kelas a dan b)
function getData() {
    let totalClassA = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(30)
        }, 2000);
    })

    let totalClassB = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(35)
        }, 2000);
    })

    let total = totalClassA + totalClassB // belum punya nilai + belum punya nilai (object promise)
    console.log(total)                    // Karena console.log tidak membutuhkan waktu, sehinggan data totalClassA dan totalClassB belum di dapatkan (setTimeout)
}
getData()


// 2️⃣ Syntax & contoh async await
async function getData() {
    let totalClassA = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(30)
        }, 2000);
    })

    let totalClassB = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(35)
        }, 2000);
    })

    let total = await totalClassA + await totalClassB // 💡 ketika sudah diberikan await maka script akan berhenti di situ, dan jalan kembali ketika sudah mendapatkan nilai

    console.log(total)                                // 📝 Harus menunggu dulu sampai selesai perhitungan total
}
getData()
