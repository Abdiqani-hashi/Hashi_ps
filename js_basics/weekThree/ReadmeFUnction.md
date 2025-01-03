# What is function?

> It is a block of code designed to perform a specific task and it is excuted when the function name is being invoked.
 
 >>> * Reuse code
 >>> * Code can be used many times
 >>> * Use same code with different arguments to produce different result.

*example 1*

```
    function GetAverage(a,b){
        const average = (a +b) / 2;
        console.log(average)
    }

    GetAverage(2,3)
```


*example 2*

> Return statement ends function excution and specifies       a value to be returned the function caller.

```
    function GetAverage(a,b){
        const average = (a +b) / 2;
        console.log(average)
        return average;
    }

    GetAverage(2,3)
```