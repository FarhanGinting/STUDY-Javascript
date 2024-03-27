// 1️⃣ Basic syntax fetch API
async function getData() {
    
    let response = await fetch('https://api.restful-api.dev/objects')
    let data = await response.json()
    console.log(data)

// 2️⃣ Get response status
    console.log(response.status)
}
getData()



// 3️⃣ Syntax fetch API versi lengkap
async function getData() {
    let response = await fetch('https://api.restful-api.dev/objects', {
        method : 'GET',
        headers : {
            Authentication: "whatever",
            whatever: "whatever2"
        },
        body: {
            nis: 12345678901,
            name: 'test'
        }
    })
    let data = await response.json()
    console.log(data)
}
getData()



// 4️⃣ Fetch API dengan method post
async function getData() {
    let newData = {
        "name": "Apple MacBook Pro 16",
        "data": {
        "year": 2019,
        "price": 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        "color": "silver"
        }
    }
    

    let response = await fetch('https://api.restful-api.dev/objects/7', {
        method : 'PUT',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newData)
    })
    let data = await response.json()
    console.log(data)
    console.log(response.status);
}
getData()