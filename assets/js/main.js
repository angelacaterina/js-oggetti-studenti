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
          <h2>${firstName} ${lastName}</h2>
        </div>
    `
  console.log(key, student[key]);
}
document.getElementById('student').insertAdjacentHTML('beforeend', studentMarkup);

// 2. Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studentList = [
  {
    firstName : "Camilla",
    lastName : "Dia",
    age : 25
  },
  {
    firstName : "Marco",
    lastName : "Barazzutti",
    age : 24
  },
  {
    firstName : "Klaus",
    lastName : "Brown",
    age : 34
  }
]

console.log(studentList.length, studentList);

for(var i = 0; i < studentList.length; i++){
  var firstName = studentList[i].firstName;
  var lastName = studentList[i].lastName;
  var age = studentList[i].age;
  var studentMarkup2 =
  `
    <div class="cardStudent">
      <h2>${firstName} ${lastName}</h2>
    </div>
  `
  console.log(studentList[i].firstName, studentList[i].lastName, studentList[i].age);

  document.getElementById('studentList').insertAdjacentHTML('beforeend', studentMarkup2);
}

// 3. Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$('#btn').click(function(){
  var newFirstName = prompt("nome");
  var newLastName = prompt("last name");
  var newAge = Number(prompt("age"));

  studentList.push({
    firstName : newFirstName,
    lastName : newLastName,
    age : newAge
  });

  var studentMarkup3 =
  `
    <div class="cardStudent">
      <p class = "red"> New Student</p>
      <h2 class = "red">${newFirstName} ${newLastName}</h2>
    </div>
  `
  console.log(newFirstName, newLastName, newAge);
  // console.log(studentList[i].firstName, studentList[i].lastName, studentList[i].age); // non mi segna il secondo add student

  document.getElementById('studentList').insertAdjacentHTML('beforeend', studentMarkup3);
  console.log(studentList);
})
