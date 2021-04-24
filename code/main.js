let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here

/*For the first task, you have to create a simple function — chooseName() — that prints a random name from the provided array (names) to the provided paragraph (para), and then run it once.*/

/*Create the function statement*/

/*Create a method to select the random name and assign it to a variable randomName*/

/*Assign randomName to para textContent*/

function chooseName() {

    let randomName = names[Math.floor(Math.random()*10)];
    para.textContent = randomName;

}

/*Call the function chooseName()*/

chooseName();

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);