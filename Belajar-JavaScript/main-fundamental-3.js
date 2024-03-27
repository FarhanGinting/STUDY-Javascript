//1️⃣ Logical Operator OR(||) & AND(&&) 🔚

let warna  = 'merah'

// => OR(||) Jika salah satu kondisi terpenuhi = True
if (warna=='merah' || warna=='biru' || warna=='kuning') {
    alert('ini warna primer')
}
else {
    alert('ini bukan warna primer')
}
//💡 Reminder Help [3:1] 💡
// if (true || true) = true
// if (true || false) = true
// if (false || true) = true
// if (false || false) = false


// => AND(&&) Jika semua kondisi terpenuhi = True
if (warna=='merah' && warna=='biru' && warna=='kuning') {
    alert('ini warna primer')
}
else {
    alert('ini bukan warna primer')
}
//💡 Reminder Help [1:3] 💡
// if (true || true) = true
// if (true || false) = false
// if (false || true) = false
// if (false || false) = false


//2️⃣ Logical Operator NOT(!) 🔚

let nilai = true

if (nilai != true) {
    alert('nilanya false')
}
else {
    alert('nilanya true')
}


//3️⃣ Null Coalescing Operator (??) 🔚

let a = null
let b = undefined
let c = 'ada nilai'

let hasil = a ?? b ?? c ?? 'whatever'

alert(hasil)