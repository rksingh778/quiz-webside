const quizData = [
    {
      question: "What is event delegation in JavaScript?",
      options: ["Assigning multiple event listeners to a single element", "Bubbling of events to the document level", "Creating events for dynamic elements", "Handling events using delegation keyword"],
      answer: "Bubbling of events to the document level"
    },
    {
      question: "What is the purpose of the 'use strict' statement in JavaScript?",
      options: ["To enable strict mode for the entire script", "To declare a new variable", "To create a new function", "To include external JavaScript files"],
      answer: "To enable strict mode for the entire script"
    },
    {
      question: "How does prototypal inheritance work in JavaScript?",
      options: ["Objects inherit directly from other objects", "Objects inherit from classes", "Objects inherit from a central prototype", "Objects cannot inherit in JavaScript"],
      answer: "Objects inherit directly from other objects"
    },
    {
      question: "What is the purpose of the'Promise' object in JavaScript?",
      options: ["To represent a value that might be available now, or in the future, or never", "To handle exceptions in asynchronous code", "To execute a function asynchronously", "To create a new object"],
      answer: "To represent a value that might be available now, or in the future, or never"
    },
    {
      question: "What is the role of the 'reduce' function in JavaScript?",
      options: ["To apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value", "To filter elements in an array", "To create a new array with the results of calling a provided function on every element in the array", "To create a new array with all elements that pass a test"],
      answer: "To apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value"
    },
    {
      question: "How do you prevent the default behavior of an HTML form submission using JavaScript?",
      options: ["event.preventDefault()", "event.stopPropagation()", "return false", "Both A and C"],
      answer: "Both A and C"
    },
    {
      question: "What is the purpose of the 'fetch' API in JavaScript?",
      options: ["To make network requests and handle responses asynchronously", "To manipulate the DOM", "To create a new object", "To declare a new variable"],
      answer: "To make network requests and handle responses asynchronously"
    },
    {
      question: "How can you handle errors in asynchronous code in JavaScript?",
      options: ["Using try...catch blocks", "Using the 'finally' block", "Using the 'catch' method of a Promise", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is the purpose of the 'Object.freeze()' method in JavaScript?",
      options: ["To prevent modifications to an object's properties and values", "To delete all properties of an object", "To freeze the entire JavaScript runtime", "To create a new frozen object"],
      answer: "To prevent modifications to an object's properties and values"
    },
    {
      question: "How do you create a new Promise in JavaScript?",
      options: ["new Promise()", "Promise.create()", "Promise()", "createPromise()"],
      answer: "new Promise()"
    },
  ]


  let index = 0;
  let score = 0;
  let wrong = 0;
  let total = quizData.length;
  console.log(total);
  const hardquestion = document.getElementById("question");
  const hardoptions = document.querySelectorAll(".option");
  const loadquestion = () => {
    if (index == total) {
      return endQuiz();
    } else {
      reload();
    }
    const data = quizData[index];
    hardquestion.innerHTML = `Question ${index + 1} : ${data.question}`;
    hardoptions.forEach((option, i) => {
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
  // const hardQuestion = quizData.hard[0];
  // const hardQuestion = quizData.hard[0];
  // const hardQuestion = quizData.hard[0];
  // console.log(hardQuestion1.question);
  // console.log("Options:", hardQuestion1.options);
  // console.log("Answer:", hardQuestion1.answer);
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
    hardoptions.forEach((input) => {
      if (input.checked) {
        selectedOptions.push(input.value);
      }
    });
    return selectedOptions;
  };
  
  const reload = () => {
    hardoptions.forEach((input) => {
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