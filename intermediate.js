const quizData = [
  {
    question: "What is closure in JavaScript?",
    options: [
      "A function that has access to variables in its outer scope",
      "A way to close a browser window",
      "A method to close a database connection",
      "A way to close an HTML tag",
    ],
    answer: "A function that has access to variables in its outer scope",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "To refer to the current HTML document",
      "To refer to the current object",
      "To declare a new variable",
      "To create a new function",
    ],
    answer: "To refer to the current object",
  },
  {
    question: "What is the difference between 'let' and 'const' in JavaScript?",
    options: [
      "'let' is used for block-scoped variables, and 'const' is used for constants",
      "'let' is used for constants, and 'const' is used for block-scoped variables",
      "There is no difference",
      "'let' is used for globally-scoped variables, and 'const' is used for block-scoped variables",
    ],
    answer:
      "'let' is used for block-scoped variables, and 'const' is used for constants",
  },
  {
    question: "What is the purpose of the 'map' function in JavaScript?",
    options: [
      "To create a new array with the results of calling a provided function on every element in the array",
      "To filter elements in an array",
      "To check if an array includes a certain value",
      "To reduce the array to a single value",
    ],
    answer:
      "To create a new array with the results of calling a provided function on every element in the array",
  },
  {
    question:
      "What is the role of the 'async' and 'await' keywords in JavaScript?",
    options: [
      "To declare asynchronous functions",
      "To create an event listener",
      "To handle errors in synchronous code",
      "To declare variables",
    ],
    answer: "To declare asynchronous functions",
  },
  {
    question: "How do you create a new object in JavaScript?",
    options: ["new Object()", "{}", "Object.create()", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of the 'prototype' property in JavaScript?",
    options: [
      "To add new properties and methods to existing objects",
      "To define the prototype of an object",
      "To access the parent object's properties",
      "To remove properties from an object",
    ],
    answer: "To define the prototype of an object",
  },
  {
    question:
      "How can you check if a variable is of type 'function' in JavaScript?",
    options: [
      "typeof variable === 'function'",
      "variable instanceof Function",
      "Both A and B",
      "None of the above",
    ],
    answer: "Both A and B",
  },
  {
    question:
      "What is the purpose of the 'Object.keys()' method in JavaScript?",
    options: [
      "To retrieve an array of an object's enumerable property names",
      "To check if an object has a specific property",
      "To create a new object with the same properties as the original object",
      "To iterate over an object's properties",
    ],
    answer: "To retrieve an array of an object's enumerable property names",
  },
  {
    question: "What is the difference between '=='' and '===' in JavaScript?",
    options: [
      "'==' performs type coercion, while '===' does not",
      "'===' performs type coercion, while '==' does not",
      "There is no difference",
      "Both perform type coercion",
    ],
    answer: "'==' performs type coercion, while '===' does not",
  },
];

let index = 0;
let score = 0;
let wrong = 0;
let total = quizData.length;
console.log(total);
const intermediatequestion = document.getElementById("question");
const intermediateoptions = document.querySelectorAll(".option");
const loadquestion = () => {
  if (index == total) {
    return endQuiz();
  } else {
    reload();
  }
  const data = quizData[index];
  intermediatequestion.innerHTML = `Question ${index + 1} : ${data.question}`;
  intermediateoptions.forEach((option, i) => {
    option.value = data.options[i];
    option.nextElementSibling.innerText = data.options[i];
  });
  console.log(data);
};

// const submitQuiz = () => {
//   const ans = getAnswer();
//   console.log("clicked" , ans)
// }

//
// const intermediateQuestion = quizData.intermediate[0];
// const intermediateQuestion = quizData.intermediate[0];
// const hardQuestion = quizData.hard[0];
// console.log(intermediateQuestion1.question);
// console.log("Options:", intermediateQuestion1.options);
// console.log("Answer:", intermediateQuestion1.answer);
const submitQuiz = () => {
  const currectanswer = quizData[index].answer;
  console.log(currectanswer);
  const ans = getAnswer();
  console.log("clicked", ans);

  if (ans == currectanswer) {
    score++;
  } else {
    wrong++;
  }
  index++;
  loadquestion();
};

const getAnswer = () => {
  let selectedOptions = [];
  intermediateoptions.forEach((input) => {
    if (input.checked) {
      selectedOptions.push(input.value);
    }
  });
  return selectedOptions;
};

const reload = () => {
  intermediateoptions.forEach((input) => {
    if (input.checked) {
      input.checked = false;
    }
  });
};

const endQuiz = () => {
  console.log("Entering endQuiz function");
  const quizFormElement = document.getElementById("box");

  if (quizFormElement) {
    quizFormElement.innerHTML = `
      <h3> Thank you For Playing the Quiz </h3>
      <h2> ${score} / ${total} are correct </h2>`;
  } else {
    console.error("quizForm element not found");
  }
};

loadquestion();

// const getAnswer = () => {
//   let answ;
//   intermediateoptions.forEach((input) => {
//     if (input.Checked) {
//       console.log("yes");
//       console.log(intermediateoptions.Checked);
//       answ = intermediateoptions
//     }
//   });
//   return answ
// };

// const getAnswer = () => {
//   for (const input of intermediateoptions) {
//     if (input.checked) {
//       console.log(input.value);
//       return input.value;
//     }
//   }
//   // If no checked input is found
//   return null; // or handle the case where there's no checked input
// };
