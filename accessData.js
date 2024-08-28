const numbers = [25, 45, 54, 545, 8, 68, 7];
const friends = [{ id: "01", name: "maleka banu", age: 23, gender: "female" }];
// console.log(friends[0].name);
// console.log(numbers[0]);

// const friend = [
//   {
//     id: "01",
//     name: "maleka banu",
//     age: 23,
//     gender: "female",
//   },
//   {
//     id: "02",
//     name: "saleka banu",
//     age: 21,
//     gender: "female",
//     friends: {
//         name: 'sajib',
//         address: {
//             vill: 'rayna',
//             dis:"natore"
//         }
//     }
//   },
//   {
//     id: "03",
//     name: "aleka banu",
//     age: 25,
//     gender: "female",
//   },
// ];

// console.log(friend[1].name);
// console.log(friend[1].friends.address.vill);

const friend = [
  {
    id: "01",
    name: "maleka banu",
    age: 23,
    gender: "female",
  },
  {
    id: "02",
    name: "saleka banu",
    age: 21,
    gender: "female",
    friends: [
        {
            name: 'sajib',
            address: {
                vill: 'rayna',
                dis:"natore"
            }
        },
        {
            name: 'raju',
            address: {
                vill: 'pabna',
                dis:"pabna"
            }
        }
    ]
  },
  {
    id: "03",
    name: "aleka banu",
    age: 25,
    gender: "female",
  },
];

console.log(friend[1].friends[1].address.vill);

