// 1️⃣ Perbedaan asynchronous(Tidak berurutan, bisa di atur baris mana yang ingin di eksekusi dan di lompati)(Yang lebih cepat selesai, maka itu ditampilkan duluan) dan synchronous(Berurutan, dari atas ke bawah)
// 💡 Pengertian => Sebagai metode dalam menjalankan sebuah program JavaScript
//    Secara default program JavaScript menjalankan sistem menggunakan metode "synchronous"

console.log('Progress 1')
console.log('Progress 2')
console.log('Progress 3') // 💡 synchronous  => Jika pada progress 3 sangat lama, akan terus menunggu nya sampai selesai baru, jalan ke progress 4
                          //     asynchronous => Jika pada progress 3 sanget lama, maka akan dibiarkan mengelola dibelakang layar, dan lanjut ke progress 4
console.log('Progress 4')
console.log('Progress 5')



// 2️⃣ Contoh metode asynchronous
console.log('Progress 1')
console.log('Progress 2')
setTimeout(() => {
    console.log('Progress 3') // progress import data membutuhkan waktu, jadi biarin aja, lanjut ke progress selanjutnya
}, 3000);
console.log('Progress 4')
console.log('Progress 5')
// 📝 Contoh penggunaan asynchronous :
//      • Callback
//      • Promise
//      • async await