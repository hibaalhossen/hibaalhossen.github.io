/* array  */
var books = [];

/* object constructur */
function book(name, price) {
  this.name = name;
  this.price = price;
  this.status = function() {
    return (this.name + " " + this.price);
  };
}

/* store object into array */
books [books.length] = new book("Java", "Script"); // books[0]

books.push(new book("book1", "50"));
books.push(new book("book2", "40"));
books.push(new book("book3", "20"));

books[books.length] = new book("stack", "overflow"); // books[4]

/* loop array */
for (var i in books) {
  alert(books[i].status());
}

/* convert array of object into string json */
var jsonString = JSON.stringify(books);
document.write(jsonString);
/* if the content is not empty*/
books.forEach(function (book) { document.write(book)};

