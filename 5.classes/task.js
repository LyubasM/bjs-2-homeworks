class PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix(){
        this._state = this._state * 1.5;
        this.state = this._state;
    }

    set state(state){
        if (state < 0) {
            state = 0;
        } else if (state > 100) {
            state = 100;
        }

        this._state = state;
    }

    get state(){
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
    }

    type = "magazine";
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book._state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let searchedBook = this.books.find(book => book[type] === value);
        if (!searchedBook) {
            return null;
        }
        return searchedBook;
    }

    giveBookByName(bookName){
        let searchedBook = this.findBookBy("name", bookName);
        if (searchedBook){
            this.books.splice(this.books.searchedBook, 1)
        }
        return searchedBook;
    }
}

// Additional task

class Student {
    constructor(name, gender, age) {
    this.name = name,
    this.marks = {}
    }

addMark(mark, subjectName) {
    if (mark < 2 || mark > 5) {
        return;
    }

    if (!(subjectName in this.marks)) {
        this.marks[subjectName] = [];
    }
    
    this.marks[subjectName].push(mark);
}

getAverageBySubject(subject) {
    if (this.marks === {} || !(subject in this.marks)) {
      return 0;
    }
    return this.marks[subject].reduce((acc, mark) => acc += mark) / this.marks[subject].length;
  }

getAverage() {
    let keys = Object.keys(this.marks);
    return keys.reduce((acc, key) => acc += this.getAverageBySubject(key), 0) / keys.length;
}
}
