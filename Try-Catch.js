// 1️⃣ Sintaks try and catch
function test() {
    try {
        let lolos = true
        if (lolos) {
            alert("Selamat, anda lolos ke tahap berikutnya");
        }   
        else {
            alert("Jangan Menyerah");
        }
    } catch (error) {
        alert('ada kesalahan, silahkan kontak administrator')
    }
}
test();



// 2️⃣ Parameter pada catch
function test() {
    try {
        if (lolos) {
            alert("Selamat, anda lolos ke tahap berikutnya");
        }   
        else {
            alert("Jangan Menyerah");
        }
    } catch (error) {
        alert('ada kesalahan, silahkan kontak administrator')
        console.log(error.name);   // = ReferenceError
        console.log(error.message) // = lolos is not defined
        console.log(error.stack)   // = ReferenceError: lolos is not defined
        console.log(error)         // = ReferenceError: lolos is not defined
    }
}
test();



// 3️⃣ finally dan cara kerjanya
function test() {
    try {
        if (lolos) {
            alert("Selamat, anda lolos ke tahap berikutnya");
        }   
        else {
            alert("Jangan Menyerah");
        }
    } catch (error) {
        alert('ada kesalahan, silahkan kontak administrator')
        alert(error.name);   
        alert(error.message) 
        alert(error.stack)   
        alert(error)
    }
    finally {
        alert('Ini finally, yang akan di run walaupun kondisi error atau pun berhasil')
    }
}
test();