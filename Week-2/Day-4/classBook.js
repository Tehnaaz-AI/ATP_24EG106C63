class Book{
    title; 
    author;
    pages;
    isAvailable;
     

    constructor(title,author,pages,isAvailable=true){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }

    borrow() //Marks the book as not available
    {
        this.isAvailable=false
        this.availCount-=1

    }
      returnBook() // Marks the book as available
      {
        this.isAvailable=true
        this.availCount+=1
      }
      getInfo() // Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      {
        return(`${this.title} by ${this.author} (${this.pages} pages)`)
      }
      isLongBook()// Returns true if pages > 300, false otherwise
      {
        if(this.pages>300){
            this.lenCount+=1
            return true
        }
        return false
      }
}


//Create at least 5 book objects using the class
const b1=new Book("The Fire","A",279)
const b2=new Book("The Water","B",342)
const b3=new Book("The Sky","C",564)
const b4=new Book("The Land","D",219)
const b5=new Book("The Wind","E",268)

//Display info of all books
console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getInfo())
console.log(b5.getInfo())

//Borrow 2 books and show their availability status
b1.borrow()
b4.borrow()

console.log(b1.isAvailable)
console.log(b4.isAvailable)


//Return 1 book and show updated status
b1.returnBook()

console.log(b1.isAvailable)

//Count how many books are "long books" (more than 300 pages)

arrObj=[b1,b2,b3,b4,b5]

let isLongCount=0
for(let ele of arrObj){
    if(ele.isAvailable==true)
        console.log(ele) //List all available books
    if(ele.pages>300)
        isLongCount+=1 //Count how many books are "long books" (more than 300 pages)
}

console.log(isLongCount)//returns count of books, pages>300




