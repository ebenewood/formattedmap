###Branching Demonstration

Takes user input and develops different branches based on yes or no responses.

####Date of Version:19/March/2016

Author:  ~~Eben~~

###Description

Logical conditions are fashioned by the user input, and an array.

The array keeps track of the user's answers; yes = (1) or no = (0).

Based on the composition of the array and the user input, the selection process continues.

After a few questions, the <divs> with .blocks class are given a background image and the array is cleared.

###Setup/Installation Requirements

* Input yes, no, or reset.

* Press enter.

## Bugs/Problems

The amount of divs used could burden some users.

## Support and contact details

If there are any problems shoot me an e-mail: ebenewood@yahoo.com

## Technologies Used

JS, Jquery, HTML, CSS

## Interesting Code

The following functions create a background image based on user date.

BGC 'background-color' function requests a new Date, 
parses the new date into a numeric value, 
makes the numeric value an string of characters, 
loops over that string of characters- each time calling the COLOR function, 
and passes the value returned by the COLOR function to an array: colorArr.

Example:
new Date = Mon Aug 15 1977 19:25:31 GMT-0700 (PDT)
Date.parse = 240546331000
this gets turned into a string '240546331000'
this string gets made into a bunch of color values based on the COLOR function which are passed to an array:

````colorArr = ["blue", "black", "gray", "yellow", "green", "orchid", "orchid", "gray", "blue", "red", "red", "red", "red", "red"] ````

COLOR function assigns colors to a string generated by the BGC function

The ORIENT functions will be used to control the start positions of some boxes made in the background later on in the script.

ORIENTX function is like flipping a coin; 
it takes the character at an index of a string generated by the BGC function; 
if the character is even, the variable posX is 'top', if odds, the variable posX is 'bottom'.

ORIENTY is just ORIENTX, the only difference is it controls a different variable, posY;
and this variable can be either 'left' or 'right'.

BGC is called and ORIENTX & Y are called on character positions (9 & 8) which often have different values (seconds and tens of seconds).

DIVMAKER function creates a bunch of divs based on a BGC, COLOR, and ORIENT(X&Y) functions.

The 'add' family of variables is declared. These variables are added to each time the loop circles around, and they are added to by a character of the Date string generated by BGC function.

The loop is creating <divs> which are pushed
left or right by the ADDX variable,
up or down by the ADDY variable,
made incrementaly wider by the ADDWIDTH variable,
made incrementaly taller by the ADDHEIGHT variable.

There are two loops nested inside one another. All that is happening is the one on top (using the j variable as a counter) is asking the one underneath (using the i variable as a counter) to do what it is doing 100 more (j <= 100).

Each time 'i counter' loop cycles through it sends the <div> it makes to the <div class='loopbox'> portion of index.html.


### License

There are no licenses attributed to this code whatsoever.
