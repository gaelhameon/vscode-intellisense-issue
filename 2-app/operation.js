/** Everything works fine when I require the file directly  */
const Foo = require('../1-domain/entities/Foo');

/** But if I comment the line above, and uncomment the two lines below, 
 *  intellisense starts considering that my functions return or need the Foo class
 *  rather than foo instances, even though Foo is the same object in both cases AFAIK
 */ 

// const {entities} = require('../1-domain/index');
// const {Foo} = entities;

/**
 * @param {string} someArg - arg to use for the bar of the foo
 * @returns {Foo} a new foo
 */
function functionThatReturnsFooInstance(someArg) {
  return new Foo({ bar: someArg });
}

const myFoo = functionThatReturnsFooInstance('myBar');

myFoo.fooMethod();


/**
 * @param {Foo} fooInstance - a foo to use
 */
function functionThatNeedsFooInstance(fooInstance) {
  console.log(fooInstance.fooMethod());
}

functionThatNeedsFooInstance(myFoo);


/** @type {Foo} */
let anotherFoo;

