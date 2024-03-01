// 1️⃣ Syntax Function Declaration
function namafunction() {
    alert('hello ini function')
    alert('ini function')
}
namafunction();


// 2️⃣ Function With Parameters
function hitungLuasPersegiPanjang(panjang, lebar) {
    alert(panjang * lebar)
}
hitungLuasPersegiPanjang(5, 3);


// 3️⃣ Local Variable
function testLocalVariable() {
    let variable1 = 'test' //💡Local Variable because, declaration inside function💡
    alert(variable1)
}
testLocalVariable()


// 4️⃣ Global Variable
let globalVariableTest = "ini global variable"; //💡Global Variable because, declaration not inside function💡
function testGlobalVariable() {
    alert(globalVariableTest); //📝because it's a global variable, we can use it in the function📝
}
testGlobalVariable();


// 5️⃣ Default Value Parameter
function hitungLuasSegitiga(alas, tinggi, setengah=0.5) {
    alert(setengah * alas * tinggi)
}
hitungLuasSegitiga(5, 3);


// 6️⃣ Function Return Value
function hitungKelilingPersegi(sisi) {
    hasil = sisi * 4
    return hasil // 📝the use of return value will be very useful because, we can use return value data for various things📝
}
// alert(hitungKelilingPersegi(5));
// console.log(hitungKelilingPersegi(5));

let persegi1 = hitungKelilingPersegi(5)
let persegi2 = hitungKelilingPersegi(10)

alert('persegi panjang 1 luasnya ' + persegi1)
alert('persegi panjang 2 luasnya ' + persegi2)

// 7️⃣ Function Expression

    // Function Declaration
    function thisDeclaration() {
        alert('This is a function declaration')
    }

    //⚙️ Function Expression
    let thisExpression = function(valueA, valueB){ //📝Function expression, has the main difference: it is used by declaring a function and can only be called after it is declared📝
        alert(valueA + valueB)
    }

    thisExpression(10, 6)
