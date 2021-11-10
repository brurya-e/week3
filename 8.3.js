// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.

const book1 = {
    name: 'abc',
    author: 'aa',
    year: 2012
}
const book2 = {
    name: 'def',
    author: 'dd',
    year: 2021
}
const bookUtils = {
    getFirstPublished(book1,book2){
        //returns the book with the smaller year.
        return(book1.year<book2.year ? book1 : book2);
    },
    setNewEdition(book, editionYear) {
        //sets a new property latestEdition with the edition year, or updates an existing one.
        book.latestEdition = editionYear;
    },
    setTranslation(book, _language, _translator) {
        //sets a new property of translation, which is an object that contains the translator and the language
        book.translation = {...book.translation,
            translator: _translator,
            language: _language
        }
    },
    setPublisher(book, _name, _location) {
        //sets a new property named publisher, which is an object that contains the name and location.
        book.publisher = {
            name: _name,
            location: _location
        }
    },
    isSamePublisher(book1, book2) {
        //checks if the publisher name and location are identical in the 2books.
        return (book1[publisher].name == book2[publisher].name && book1[publisher].location == book2[publisher].location);
    }
};
// console.log(book1);
// console.log(book2);
// console.log(bookUtils.getFirstPublished(book1,book2));
bookUtils.setNewEdition(book1, 2009);
bookUtils.setTranslation(book1, 'english', 'ms d');
bookUtils.setTranslation(book1, 'spanish', 'ms d');

bookUtils.setPublisher(book1, 'some name', 'some location');
bookUtils.setPublisher(book1, 'some name2', 'some location2');

console.log(book1);


