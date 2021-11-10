// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year <publishing yeary

const books = {
	'abc' : {
		author  : 'Blue',
		publis : 1982,
        ategory : 'drama',
	},
	'dff' : {
		author  : 'ms r',
		publis : 1999,
        ategory : 'comedia',
	}
};

const detealis = name =>
{
    for ( let b in books){
        if ( b == name)
        {
            return ( `The book ${b} was written by ${books[b].author} in the year ${books[b].publis}`);
        }
    }
}

console.log(detealis('dff'));