// Метод, який ми розглядали на лекції по Розгалуженням та циклам

// function slugify(title) {
//     const slug = title.toLowerCase().replaceAll(' ', '-');
//     return slug;
// }

// Метод по конспекту Масиви і функції

function slugify(title) {
    let slug = title.toLowerCase();
    slug = slug.split(' ');
    return slug.join('-');
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"