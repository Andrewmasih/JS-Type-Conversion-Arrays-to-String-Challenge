/* with difference type of data, "how can I convert one data type to another?".

there are various methods for converting data types,one of them is 'toString()' and another of which is 'join()'

'daysOfTheWeek' varible has been created, which is an array containing the severn days of the week.

Challenge.
1/ define a varible, 'weekString', which is the string representation of the 'daysOfTheWeek'

2/ define another varible, weekWithSpaces, which joins 'daysOfTheWeek', with a space as the separator.

Requirements.
1/ All varibles must be defined and have the correct values and data types.

2/ The original array must not be modified.

*/

// already defined

let daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// my input of the Challenge.

let weekString = daysOfTheWeek.toString();
let weekWithSpaces = daysOfTheWeek.join(" ");

console.log(weekString);
console.log(weekWithSpaces);


