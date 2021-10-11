// Primitive Types number, string, array, boolean
function add(x : number, y : number) {
  return x + y;
}

// these can be inferred by TS
let age : number = 5;
let lastName : string = 'over40dev';

// array is like a box of items of a certain type
let pets : string[] = [];

let isLoaded : boolean = true;

let foo1;
let foo2 : undefined = undefined;
let foo3 : null = null;

// can't assign number to string in TS lastName = 5; can't add number to string
// array in TS pets.push(5); no data types including 'interfaces' do not make it
// into plain JS once compiled interfaces are like 'code contracts' that specify
// the property and 'type' and can be labelled optional
interface Customer {
  firstName : string;
  lastName : string;
}

// this causes TS error because 'customer' is defined as type 'Customer' which
// knows it should have two string properties named 'firstName' and 'lastName'
// but only one is present. let customer: Customer = {   firstName: 'Ted' } now
// there are no TS errors because all properties are provide
let customer : Customer = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 27
}
