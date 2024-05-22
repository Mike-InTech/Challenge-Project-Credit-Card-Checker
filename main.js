// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

const random1 = [6,0,1,1,7,5,2,3,4,3,4,5,4,4,4,4]
const random2 = [5,5,0,7,7,4,8,8,0,0,8,3,5,6,0,6]
const random3 = [3,7,0,3,9,0,6,0,8,4,2,6,9,1,9]
const random4 = [6,0,1,1,2,5,5,7,0,8,6,8,8,1,3,4]
const random5 = [4,9,2,9,7,6,8,8,1,0,3,8,1,1,1,1]

const randomArray = [random1, random2, random3, random4, random5]

// Add your functions below:

const validateCred = (array) => {
  const reversed = array.slice().reverse(); // reverses the array
  let sum = 0;

  // goes thru each # of reversed
  for (let i = 0; i < reversed.length; i++) {
    let currentVal = reversed[i]; // current digit

    // finding every other # (odd indexes i.e. 1, 3, 5...)
    if (i % 2 !== 0) {
      currentVal *= 2; // multiplies every other # by 2

      if (currentVal > 9) {
        currentVal -= 9; // Subtract 9 if the result is greater than 9
      }
    }
    sum += currentVal; // adds the current value to sum
  }
  // Check if the sum is divisible by 10
  /*if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }*/
  return sum % 10 === 0; // same as ^
};

// Test
//console.log(validateCred(valid5))

// checks array of CCs to find invalid ones
const findInvalidCards = (array) => {
  let invalidCards = []; // empty array that will store invalid CCs

  for (let i = 0; i < array.length; i++) {
    // current CC goes thru the validateCred function
    let currentCC = validateCred(array[i]);
    if (!currentCC) {
      // adds the current invalid CC to array
      invalidCards.push(array[i]);
    }
  }
  return invalidCards;
};

// Test
//console.log(findInvalidCards(batch));

const idInvalidCardCompanies = (nestedArray) => {
  let x = []; // empty array that will store companies w/ invalid CCs
  let companies = ["Amex (American Express)", "Visa", "Mastercard", "Discover"];
  for (let i = 0; i < nestedArray.length; i++) {
    let currentCC = nestedArray[i];
    let company = "";

    switch (currentCC[0]) {
      case 3:
        company = companies[0];
        break;
      case 4:
        company = companies[1];
        break;
      case 5:
        company = companies[2];
        break;
      case 6:
        company = companies[3];
        break;
      default:
        company = "Company not found";
    }

    if (company !== "Company not found" && !x.includes(company)) {
      x.push(company);
    }
  }
  return x;
};

const convertToArray = (cc) => {
  if (cc.length >= 15 && cc.length < 17) {
    let ccArray = []
    for (let i = 0; i < cc.length; i++) {
      let x = parseInt(cc[i])
      ccArray.push(x)
    }
    return ccArray
  } else {
    console.log('Not a real credit card, please try again')
  }
}

//const invalidCards = findInvalidCards(batch);
//const invalidCompanies = idInvalidCardCompanies(invalidCards);
let newCC = '370390608426919'

console.log(convertToArray(newCC))

/*const x = findInvalidCards(randomArray);
const y = idInvalidCardCompanies(x)

console.log(y)*/

//console.log(invalidCompanies);
