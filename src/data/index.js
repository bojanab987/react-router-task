const books = [
    {
        title:"You Don't Know JS",
        bookId:35,
        author:"Kyle Simpson",
        genre:"IT tech"
    },
    {
        title:"HTML5, CSS3 and JavaScript web dev",
        bookId:768,
        author:"Laura Lemay, Rafe Colburn, Jennifer Kyrnin",
        genre:"IT tech"
    },
    {
        title:"CSS: The Missing Manual, 4th Edition",
        bookId:720,
        author:"David Sawyer McFarland",
        genre:"IT tech"
    },
    {
        title:"Clean code",
        bookId:42,
        author:"Robert C. Martin",
        genre:"IT tech"
    },
    {
        title:"Design Patterns",
        bookId:123,
        author:"Gang of Four -  Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        genre:"IT tech"
    },
    {
        title:"Harry Potter and the Goblet of Fire",
        bookId:365,
        author:"J.K.Rowling",
        genre:"Fantasy"
    },
    {
        title:"Pazi kojeg vuka hranis",
        bookId:10,
        author:"Kenan Crnkic",
        genre:"Popular psihology"
    },
];

const songs =[
    {
        title:"(I Can't Get No) Satisfaction",
        songId:3,
        performer:"The Rolling Stones",
        year:1965,
    },
    {
        title:"Nothing else matters",
        songId:5,
        performer:"Metallica",
        year:1991,
    },
    {
        title:"Bohemian Rhapsody",
        songId:9,
        performer:"Queen",
        year:1975
    },
    {
        title:"Shallow",
        songId:6,
        performer:"Lady Gaga & Bradley Cooper",
        year:2018,
    },   

];


export function getBooks() {
    return books;
  }
  
export function getBook(bookId) {
    return books.find(book => book.bookId === bookId);
}  

export function getSongs() {
    return songs;
}

export function getSong(songId) {
    return songs.find(song => song.songId === songId);
}
  
 
  