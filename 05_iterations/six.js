// const coding = ["js", "ruby", "python", "java", "cpp"] 


// const values = coding.forEach((item) =>{
//     console.log(item);
//     return item
    
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => { -YE BHI KAAM KAREGA CURLY BRACES MEIN BUT RETURN DENA HOGA
//      return num > 4
// })

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
        
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'friction', publication: 1981, edition: 2004},

    {title: 'Book two', genre: 'Non-friction', publication: 1992, edition: 2008},

    {title: 'Book three', genre: 'history', publication: 1999, edition: 2007},

    {title: 'Book four', genre: 'Non-fiction', publication: 1989, edition: 2010},

    {title: 'Book five', genre: 'science', publication: 2009, edition: 2014},

    {title: 'Book six', genre: 'fiction', publication: 1987, edition: 2010},

    {title: 'Book seven', genre: 'history', publication: 1986, edition: 1996},

    {title: 'Book eight', genre: 'science', publication: 2011, edition: 1989},

];

let userBooks = books.filter( (bk) => bk.genre === 'history')
 userBooks = books.filter( (bk) => {
     return bk.publication >= 1995 && bk.genre === "history"

})

console.log(userBooks);


