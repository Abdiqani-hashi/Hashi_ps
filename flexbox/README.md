## flex-box basics

 **Flexbox**
- is a layout method for arranging items in rows or columns.
- is used to design flexible responsive layout structure
- Make it easier responsive layout without using position or   float

**Flexbox Components**
--
- Parent container [Flex container](https://www.w3schools.com/css/css3_flexbox.asp)
- The items inside the container [Flex items](https://www.w3schools.com/css/css3_flexbox.asp)

> Use flexbox to define a flex container.
>
 ```
   
   .main_box{
    display: flex;
    }

 ```
>  The CSS properties we use for the flex container are:
- `Flex-direction`
- `Flex wrap`
-  `Flex flow:`A shorthand property for flex-direction and flex-wrap

- `Justify-content`
- `align items`
- `align content`

> `Flex direction:` property specificies the display direction of flex items in the flex container. It can have one of the following values:
- row
- column
- row-reverse
-  column-reverse

 ```
 .main_box{

    display:flex;
    flex-direction:row;


 }
    

 ```



