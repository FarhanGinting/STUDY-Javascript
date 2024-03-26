// 1️⃣ Penjelasan syntax promise 

let promise = new Promise(function(resolve, reject) { // Ini pihak pertama 
    // Tempat menuliskan kode
    let result = true
    result ? resolve('Proses Berhasil') : reject('Preses Tidak Berhasil')

    if (result) {
        resolve('berhasil == resolve')
    }
    else {
        reject('ada yang error')
    }
})



// 2️⃣ get hasil promise untuk consumer
promise.then(
    result => console.log('ini adalah resolve '+result), // 💡 Secara default parameter pertama adalah resolve promise
    error => console.log('ini adalah reject '+error), //       Sedangkan parameter kedua adalah bagian reject promise
)



// 3️⃣ then-catch pada promise
promise
.then(
    result => console.log('ini adalah resolve '+result), // 💡 Secara default parameter pertama adalah resolve promise
                                                        //       Sedangkan parameter kedua adalah bagian reject promise
)
.catch(
    error => console.log('ini adalah reject '+error),
)



// 4️⃣ chained promise

let promise = new Promise(function(resolve, reject) { // Ini pihak pertama 
    // Tempat menuliskan kode
    resolve(2)
})

promise.then(
    result => {
        console.log(result) // 2
        return result * 2 //  4
    }

).then(
    result => {
        console.log(result) // 4
        result => {
            console.log(result)
        }
    }
)