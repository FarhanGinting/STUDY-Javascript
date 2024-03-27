// 1️⃣ Cara import jika data yang di export tidak banyak
import { usr as u, stds as st } from "./Modules_System_ Import_dan_Export_Module/Export.js";

console.log(u);
console.log(st);

// 2️⃣ Cara import jika data yang di export banyak
import * as data from "./Modules_System_ Import_dan_Export_Module/Export.js";

console.log(data.usr);
console.log(data.stds);



// 3️⃣ Contoh penerapan import untuk real data
import { Student  } from "./Modules_System_ Import_dan_Export_Module/student.js";

let student1 = new Student('jack')
console.log(student1.getName())



// 4️⃣ Cara memanggil export jika tanpa default
import { Student  } from "./Modules_System_ Import_dan_Export_Module/student.js";



// 5️⃣ Cara memanggil export jika memnggunakan export
import Student from "./Modules_System_ Import_dan_Export_Module/student.js";
let student1 = new Student('jack')
console.log(student1.getName())



// 6️⃣ Cara memanggil jika ada 2 export ( yang satu menggunakan default, dan yang satunya tidak )
import { default as Student, users  } from "./Modules_System_ Import_dan_Export_Module/student.js";

let student1 = new Student('jack')
console.log(student1.getName())

console.log(users);