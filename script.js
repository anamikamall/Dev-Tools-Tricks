 const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
console.log("Hello");
    // Interpolated
console.log("Hello I am a %s string!", 'Anamika')
    // Styled
console.log("%c Hello I am styled text", 'font-size: 25px; background: red;');
    // warning!
console.warn('OH NOO!');
    // Error :|
console.error('OOPS Error Occured!');
    // Info
console.info('I am 22 years old');
    // Testing
console.assert(1===2 , "That is Wrong"); // it is fired only when condition is false
const p = document.querySelector('p');
console.assert(p.classList.contains('oops'), "It is wrong"); //if it is true nothing happens
    // clearing
//console.clear();
    // Viewing DOM Elements
console.dir(p);
    // Grouping together
dogs.forEach(dog => {
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);  // by default group will be collapsed
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 12} months old`);
    console.groupEnd(`${dog.name}`);
});
    // counting
console.count('Anna');
console.count('Anna');
console.count('Mall');
console.count('Mall');
console.count('Mall');
console.count('Anna');
console.count('Anna');
console.count('Anna');
console.count('Mall');
console.count('Mall');
console.count('Anna');
console.count('Mall');
    // timing (to know time taken to complete a task)
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

  console.table(dogs);
