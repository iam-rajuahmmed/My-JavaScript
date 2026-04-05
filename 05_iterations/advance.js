const myBook =[
  {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "price": 350,
    "published_year": 1988
  },
  {
    "id": 2,
    "title": "Brida",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "price": 300,
    "published_year": 1990
  },
  {
    "id": 3,
    "title": "Atomic Habits",
    "author": "James Clear",
    "genre": "Self-help",
    "price": 500,
    "published_year": 2018
  },
  {
    "id": 4,
    "title": "The Power of Habit",
    "author": "Charles Duhigg",
    "genre": "Self-help",
    "price": 450,
    "published_year": 2012
  },
  {
    "id": 5,
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki",
    "genre": "Finance",
    "price": 400,
    "published_year": 1997
  },
  {
    "id": 6,
    "title": "Think and Grow Rich",
    "author": "Napoleon Hill",
    "genre": "Finance",
    "price": 300,
    "published_year": 1937
  },
  {
    "id": 7,
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "genre": "Programming",
    "price": 800,
    "published_year": 2008
  },
  {
    "id": 8,
    "title": "The Pragmatic Programmer",
    "author": "Andrew Hunt & David Thomas",
    "genre": "Programming",
    "price": 750,
    "published_year": 1999
  },
  {
    "id": 9,
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "genre": "Fantasy",
    "price": 600,
    "published_year": 1997
  },
  {
    "id": 10,
    "title": "Harry Potter and the Chamber of Secrets",
    "author": "J.K. Rowling",
    "genre": "Fantasy",
    "price": 650,
    "published_year": 1998
  }
]

let userBook = myBook.filter((book)=> book.genre === 'Programming')

console.log(userBook);
