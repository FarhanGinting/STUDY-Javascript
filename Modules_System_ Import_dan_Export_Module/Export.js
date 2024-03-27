// 1️⃣ Cara export pertama
export let user = 'jack'
export let student = ['ben', 'ten', 'meg']



// 2️⃣ Cara export kedua
let user = 'jack huna'
let student = ['ben ada', 'ten hag', 'meg po']
export { user, student  }



// 3️⃣ Export & Import menggunakan nama alias
let user = 'jack huna'
let student = ['ben ada', 'ten hag', 'meg po']
export { user as usr, student as stds }