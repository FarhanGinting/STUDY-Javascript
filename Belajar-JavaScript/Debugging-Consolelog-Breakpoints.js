let text = 'Hello world'

// 1️⃣ Debugging Dengan console log
function changeText() {
    text = 'Halo Dunia'
    changeText2()
    alert(text)
    // console.log('isi dari variable text adalah '+text)
}

// 2️⃣ Debugging Dengan breakpoints
let changeText2 =  function() {
    text = 'Halo Coders'
    return
    changeText3()
}

let changeText3 = () => text = 'Halo Semua!'

changeText()