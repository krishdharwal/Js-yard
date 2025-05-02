const data = fetch('www.google.com')
.then((response) => {
    return response.json();
}).then( (upperResponse) => {
    console.log(upperResponse)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("finally done")
})