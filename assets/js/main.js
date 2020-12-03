// Istruzioni:
// 1. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var student = {
  firstName : "Angela Caterina",
  lastName : "Gallo",
  age : 24
}
console.log(student);

for(var key in student){
    var firstName = student.firstName;
    var lastName = student.lastName;
    var age = student.age;

    var studentMarkup =
    `
        <div class="cardStudent">
            <h2>${firstName} ${lastName} ${age}</h2>
        </div>
    `
    console.log(key, student[key]);
}
document.getElementById('student').insertAdjacentHTML('beforeend', studentMarkup);

// 2. Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// 3. Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
