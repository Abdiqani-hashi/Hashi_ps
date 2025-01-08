
# LOOPS
<details>

- [do /while](#do-while)
- [Advantages of using Do / while](#advantages-of-using-do-while)


</details>


### Do /while

 * `Do /while` ,defines a code block to be excuted at least once, it repeats as long as a condition is true.

*Note*
> You should initialize the variable before the loop and increment within the loop.The loop never end if the condition is always true, so initialize the variable before the loop and then increment within the loop.

### Advantages of using Do /while

* Guaranteed first excution
* Useful for input Validation
* Cleaner code for certain use Cases.

```js
let userInput;
do{
  userInput =prompt("Enter a number greater than 5: ");

}while(Number(userInput) &&  userInput <= 3);
console.log("you entered valid num", userInput);

```





------------------

