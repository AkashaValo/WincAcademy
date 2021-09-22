const colors = ['yellow','blue','red','orange'];

//while loop
let i = 0;
while (i < colors.length) {
  console.log(colors[i]);  
  i ++; 
}

//for loop
for (i=0; i < colors.length; i++) {
    console.log(colors[i]);  
  }

//foreach
colors.forEach(color => console.log(color));

//1. While loop neemt 3 lijnen in beslag, 4 als je de declaratie van i mee telt
//   For loop neemt 2 lijnen in beslag.
//2. Foreach neem 1 regel in beslag
//3. Cleanere code
//4. hier kun je de for .. in .. methode voor gebruiken.

const person = { name: 'Leandra', age: 38, height: 1.68, hair: 'Blond', pets : 'yes' };
for (const property in person) {
  console.log(property,':',person[property]);
}

