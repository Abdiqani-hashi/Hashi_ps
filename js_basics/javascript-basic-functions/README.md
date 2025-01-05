# Javascript-basics-functions

<details>
<summary>Table of contents</summary>

- [Function](#function)
- [Defining functions](#defining-functions)
- [Parameter Rules](#parameter-rules)
- [Arguments Object](#arguments-object)
 
</details>

### function
> `Function `are an important part of javascript and it is a set of instructions that does job or give us a result.

> To call a function , it should take input and give an output, with a clear connection between the two.When you need to use `function` Make sure to create the function in a place, where you can call it later.

## Defining functions
> The function definition are also called:
* Function statement
* Function declaration



> A function declaration consists of the function `keyword`  followed by:
*  Name of the function`eg:add`
* enclosed parenthes`()`
* enclosed curly braces `{}`

[Go back ](#Javascript-basics-functions)

## For example

```js
//A function keyword followed by the name of the function and parenthes.Insde the paranthens , you can pass a paremeters seperated by commas.

function add(a,b){
    c= a + b;
    console.log(c)
}
add(2,3) // 2 + 3 = 5
```
> The function `add` takes two parameter `a` & `b`.The function says add two parameters `a and b`and then assign to `c`.after that print out the result of c inside the function `add`.

Now call the function name followed by parenthes , outside of the function itself. and then pass `2 and 3` inside the parenthes.

[see above code ](#for-example)
---

*NOTE*

`Parameter ` is the name listed in the function declaration.
`Argument` is the real value passad to & recieved the function. 


### Parameter Rules:
* `Function declaration` not specify data types for paramaters
* `Function` don´t perform type checking on the passed arguments
* `Function` does not check the number of arguments recieved.

### Default parameters
* `Missing argument`, if a function is called with missing argument , it sets undefined.

    ```js

    function multiPly(x,y){
        if(y === undefined){
            y = 10;
        }
        return x * y;
    }
    multiPly(2)

    ```

### Default parameters values
* `ES6` let functions parameters to have default value:



    ```js

    function subTraction(x, y=20){
        return x +y;
    }

    subTraction(10)
    
    ```
### Function Rest paramater
> It allows to accept indefinit number of arguments as an array.

```js
function add(...numbers){
     const total = 0;
     for(const number of numbers){
        total += number;

     }
    return total;
}
console.log(add(1,2,3))// 6
```
[Go back](#parameter-rules)


---

### Arguments Object
> `Argument object` is a built-in feature in javascript functions.It holds an array of all values you give when you call the function.It will let to use a function to get highest number in a list of numbers.

```js

let x = findMax(1,100,30,400)
function findMax(){
    let max = -Inifity;
    for(let i = 0; i<arguments.length;i++){
        if(arguments[i] > max){
            max = arguments[i]
        }
    }

return max;

}

```


>Creating a function to sum all input values.

```js
x = sumAll(1,3,3,4,56)
function sumAll(){
    let sum = 0;
    for(let i =0; i < arguments.length; i++){
     sum += arguments[i];
    }
    return sum;

}

```
> Another function to sub all input values

```js
function subTract(a,b){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total -= arguments[i];
    }
    return total;
}

subTract(2,3)

```