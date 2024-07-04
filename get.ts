fetch("​https://api.coincap.io/v2/assets?limit=10&offset=0")
.then(response => response.json())
.then((data) => {
    console.log(data)
})