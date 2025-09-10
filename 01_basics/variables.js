const accountId = 231;
let accountEmail = 'Shekhar@gmail.com';
var accountPassword = '1234';
accountCity = 'Solapur';

// accountId = 543; // not allowed
accountEmail = 'Shri@gmail.com';
accountPassword = '321';
accountCity = "Kolhapur";

console.table([accountId , accountEmail , accountPassword , accountCity]);

var name = 'shekhar';
{
    var name = 'shri';
    console.log(name);
}
console.log(name);
