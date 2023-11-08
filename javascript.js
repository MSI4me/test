// const originalData = [
  
//     {
//       "mobile": "123-456-7890",
//       "email": "example@email.com",
//       "last_name": "Smith",
//       "first_name": "John",
//       "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "state": "CA",
//         "zip_code": "12345"
//       }
//     },
//     {
//         "mobile": "555-123-4567",
//         "email": "jane.doe@email.com",
//         "last_name": "Doe",
//         "first_name": "Jane",
//         "address": {
//           "street": "789 Elm St",
//           "city": "Springfield",
//           "state": "IL",
//           "zip_code": "62701"
//         }
//      },
     
//      {
//         "mobile": "777-555-1234",
//         "email": "johndoe@email.com",
//         "last_name": "Doe",
//         "first_name": "John",
//         "address": {
//           "street": "456 Oak Ave",
//           "city": "Anytown",
//           "state": "NY",
//           "zip_code": "54321"
//         }
//      },
     
//      {
//         "mobile": "888-999-0000",
//         "email": "jenny.smith@email.com",
//         "last_name": "Smith",
//         "first_name": "Jenny",
//         "address": {
//           "street": "321 Pine Rd",
//           "city": "Smallville",
//           "state": "KS",
//           "zip_code": "67890"
//         }
//      },
     
//      {
//         "mobile": "123-456-7890",
//         "email": "alice.jones@email.com",
//         "last_name": "Jones",
//         "first_name": "Alice",
//         "address": {
//           "street": "987 Cedar Ln",
//           "city": "Metropolis",
//           "state": "CA",
//           "zip_code": "54321"
//         }
//      },
     
//      {
//         "mobile": "555-555-5555",
//         "email": "peter.parker@email.com",
//         "last_name": "Parker",
//         "first_name": "Peter",
//         "address": {
//           "street": "42 Web St",
//           "city": "New York",
//           "state": "NY",
//           "zip_code": "10001"
//         }
//      },
     
//      {
//         "mobile": "123-987-6543",
//         "email": "mary.watson@email.com",
//         "last_name": "Watson",
//         "first_name": "Mary",
//         "address": {
//           "street": "456 Rose Dr",
//           "city": "Gotham",
//           "state": "NJ",
//           "zip_code": "12345"
//         }
//      },
     
//      {
//         "mobile": "555-777-8888",
//         "email": "bruce.wayne@email.com",
//         "last_name": "Wayne",
//         "first_name": "Bruce",
//         "address": {
//           "street": "1 Wayne Manor",
//           "city": "Gotham",
//           "state": "NJ",
//           "zip_code": "54321"
//         }
//      },
     
//      {
//         "mobile": "123-654-7890",
//         "email": "clark.kent@email.com",
//         "last_name": "Kent",
//         "first_name": "Clark",
//         "address": {
//           "street": "789 Krypton Way",
//           "city": "Metropolis",
//           "state": "IL",
//           "zip_code": "98765"
//         }
//      },
     
//      {
//         "mobile": "999-888-7777",
//         "email": "selina.kyle@email.com",
//         "last_name": "Kyle",
//         "first_name": "Selina",
//         "address": {
//           "street": "123 Cat Alley",
//           "city": "Gotham",
//           "state": "NJ",
//           "zip_code": "67890"
//         }
//      },
     
//      {
//        "mobile": "123-555-7890",
//        "email": "barry.allen@email.com",
//        "last_name": "Allen",
//        "first_name": "Barry",
//        "address": {
//          "street": "456 Speedster Ave",
//          "city": "Central City",
//          "state": "MO",
//          "zip_code": "54321"
//        }
//      },
    
  

// ];

// const transformedData = [];

// originalData.forEach(person => {
//   const transformedPerson = [
//     {
//       first_name: person.first_name,
//       last_name: person.last_name,
//       email: person.email
//     }
//   ];
//   transformedData.push(transformedPerson);
// });

// console.log(transformedData);

  
  
  
  




const fs=require('fs');

const originalData = fs.readFileSync('exercises.json');

const data = JSON.parse(originalData);

const transformedData = data.map(person => [
  
    {
      first_name: person.first_name,
      last_name: person.last_name,
      email: person.email
    }
  ]);
  
console.log(transformedData);














