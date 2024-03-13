// 1️⃣ Syntax Arrow Function
function testDeclaration() {
    alert('Ini Function Declaration');
}
let testExpression = function(){
    alert('Ini Function Expressions')
}
let testArrowFunction = () => alert('Ini Arrow Functions')
testArrowFunction()


// 2️⃣ Arroww Function Dengan Parameter
let hitungLuasPersegiPanjang = (Panjang, Lebar=2) => alert(Panjang * Lebar)
hitungLuasPersegiPanjang(6)
let hitungLuasPersegi = sisi => alert(sisi * sisi) //📝 Jika Hanya 1 parameter, tidak perlu paranteses. sisi ✅ | (sisi) ❌ 📝
hitungLuasPersegi(3)


// 3️⃣ Multi Line Arrow Function
let multiLineArrow = sisi => {
    alert(sisi * sisi)
}
multiLineArrow(5)