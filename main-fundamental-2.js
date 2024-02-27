//1️⃣ Type Conversion 🔚
let namaVariable1 = "9"
let namaVariable2 = "3"
// let convertedVar = Number(namaVariable1)
// let convertedVar = String(namaVariable1)

// + Menjumlahkan String (Concat)
// Sedangkan -, *, / akan mengubah apapun tipe data nya menjadi number
let hasil = namaVariable1 - namaVariable2


// 2️⃣ If-Else Condition 🔚
// let nilai = 9
// if (nilai > 8) 
//     alert('dapat predikat A')
// else if (nilai > 6 && nilai < 8) 
//     alert('dapat predikat B')
// else 
//     alert('dapat predikat C')


// 3️⃣ Ternary Operator
// let point = 9 
// let Results = (point > 8) ? 'Predikat A' : 'Predikat B'
// // Cara Baca : Kondisi ? 'Jika Benar(IF)' : 'Jika Salah(ELSE)'
// // let Results = (point > 8) 
// //     ? 'Predikat A' 
// //     : 'Predikat B'
// // alert(Results)

// 4️⃣ Multiple Ternary Operator
let point = 7
let Results = (point > 8) 
    ? 'Predikat A' 
    : (point > 7 && point <= 8)
        ? 'Predikat B' 
        : (point > 6 && point <= 7)
            ? 'Predikat C' 
            : 'Predikat D'
alert(Results)