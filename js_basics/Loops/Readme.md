
# LOOPS
<details>

- [For loop](#for-loop)


</details>


### For loop

> `For loops `is usef for running same code over and over again,with different value.

*example

```js
const cars = ["Merceds", "BMW", "VOLVO", "HONDO", "VOLKSVAGEN", "TOYOTA" , "SAAB", "FIAT", "AUDI"];

let text = "";
for (let i = 0; i < cars.length;i++){
    text += cars[i];,
}
 console.log(text)

```

### Different loops

*Js supports different kinds of loops*

>`For` loops through  a block of code a number of times.

- `For in` propert of an object.
- `for of` value of an iterable object.

> `while` a block of code while specified condition is true.
* `do/while` a block of code while a specified condition is true.

```js
//initialization, condition , afterthough
for (let i = 0; i<3; i++){
    console.log(`The number is :${i}`)

    
}

let str = ``;
for(let i = 0; i < 3;i++){
    str +=i;
    console.log(`The number is ` str);
}

```