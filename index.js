// console.log("yo")

fetch('https://covers.openlibrary.org/b/isbn/0385472579-S.jpg')
.then(response => response.json())
.then(book => {
    console.log(book)






});