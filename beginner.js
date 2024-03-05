const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What is the correct way to comment in JavaScript?",
    options: [
      "//This is a comment",
      "/*This is a comment*/",
      "<!--This is a comment-->",
      "#This is a comment",
    ],
    answer: "//This is a comment",
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    answer: "<ul>",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Counter Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "What is the purpose of the 'alt' attribute in an HTML image tag?",
    options: [
      "Alternative text for the image",
      "Alignment of the image",
      "Attribute list for the image",
      "Alphanumeric code for the image",
    ],
    answer: "Alternative text for the image",
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    options: ["myVariable", "_variable", "123variable", "$variable"],
    answer: "123variable",
  },
  {
    question: "How do you declare a function in JavaScript?",
    options: [
      "function myFunction()",
      "myFunction = function()",
      "function = myFunction()",
      "declare function myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "What is the result of the expression 5 + '10' in JavaScript?",
    options: ["15", "510", "510", "Error"],
    answer: "510",
  },
  {
    question:
      "What is the purpose of the 'return' statement in a JavaScript function?",
    options: [
      "To declare a variable",
      "To exit the function and return a value",
      "To include external files",
      "To create a loop",
    ],
    answer: "To exit the function and return a value",
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "pop()",
  },
];

let index = 0;
let score = 0;
let wrong = 0;
let total = quizData.length;
console.log(total);
const beginnerquestion = document.getElementById("question");
const beginneroptions = document.querySelectorAll(".option");
const loadquestion = () => {
  if (index == total) {
    return endQuiz();
  } else {
    reload();
  }
    const data = quizData[index];
    beginnerquestion.innerHTML = `Question ${index + 1} : ${data.question}`;
    beginneroptions.forEach((option, i) => {
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
// const beginnerQuestion = quizData.beginner[0];
// const intermediateQuestion = quizData.intermediate[0];
// const hardQuestion = quizData.hard[0];
// console.log(beginnerQuestion1.question);
// console.log("Options:", beginnerQuestion1.options);
// console.log("Answer:", beginnerQuestion1.answer);
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
  beginneroptions.forEach((input) => {
    if (input.checked) {
      selectedOptions.push(input.value);
    }
  });
  return selectedOptions;
};

const reload = () => {
  beginneroptions.forEach((input) => {
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
//   beginneroptions.forEach((input) => {
//     if (input.Checked) {
//       console.log("yes");
//       console.log(beginneroptions.Checked);
//       answ = beginneroptions
//     }
//   });
//   return answ
// };

// const getAnswer = () => {
//   for (const input of beginneroptions) {
//     if (input.checked) {
//       console.log(input.value);
//       return input.value;
//     }
//   }
//   // If no checked input is found
//   return null; // or handle the case where there's no checked input
// };
