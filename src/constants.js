export const jsQuizz = {
  questions: [
    {
      question:
        "What is the purpose of the 'useState' hook in React?",
      choices: [
        "To fetch data from an API",
        "To manage state in functional components",
        "To handle routing in a React application",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To manage state in functional components",
    },
    {
      question: "What is JSX in React?",
      choices: [
        "A syntax extension for JavaScript",
        "A programming language",
        "A database query language",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "A syntax extension for JavaScript",
    },
    {
      question:
        "Which method is called when a component is removed from the DOM in React?",
      choices: ["componentWillUnmount", "componentDidMount", "componentWillUpdate", "componentDidUnmount"],
      type: "MCQs",
      correctAnswer: "componentWillUnmount",
    },
    {
      question: "What is the purpose of the 'ref' attribute in React?",
      choices: ["To declare a reference to a DOM element", "To define component relationships", "To set default props", "None of the above"],
      type: "MCQs",
      correctAnswer: "To declare a reference to a DOM element",
    },
    {
      question: "What is the role of the 'map' function in React?",
      choices: [
        "To create a new array with the results of calling a provided function on every element",
        "To iterate over object properties",
        "To concatenate two arrays",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To create a new array with the results of calling a provided function on every element",
    },
    {
      question: "What is the purpose of the 'componentDidUpdate' lifecycle method?",
      choices: [
        "To fetch data from an API",
        "To perform actions after a component renders",
        "To update component's state",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To perform actions after a component renders",
    },
    {
      question: "What is the purpose of the 'Router' component in React?",
      choices: ["To manage global state", "To handle form submissions", "To manage the application's routing", "None of the above"],
      type: "MCQs",
      correctAnswer: "To manage the application's routing",
    },
    {
      question: "What is the significance of the 'className' attribute in React?",
      choices: ["It defines the component's name", "It specifies a class name for an HTML element", "It sets the component's default props", "None of the above"],
      type: "MCQs",
      correctAnswer: "It specifies a class name for an HTML element",
    },
    {
      question:
        "In React, what is the purpose of the 'forwardRef' function?",
      choices: [
        "To pass props to child components",
        "To create a reference to a DOM element",
        "To forward refs from parent to child components",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To forward refs from parent to child components",
    },
    {
      question: "What is the role of the 'webpack' in a React project?",
      choices: [
        "To manage state in a React application",
        "To bundle and manage project dependencies",
        "To handle routing",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "To bundle and manage project dependencies",
    },
    {
      question:
        "Which hook is used for handling asynchronous operations in functional components?",
      choices: ["useEffect", "useState", "useAsync", "useAsyncEffect"],
      type: "MCQs",
      correctAnswer: "useEffect",
    },
    {
      question: "What is the purpose of the 'dangerouslySetInnerHTML' attribute in React?",
      choices: ["To set the innerHTML property of an element", "To define dangerously executed code", "To include external scripts", "None of the above"],
      type: "MCQs",
      correctAnswer: "To set the innerHTML property of an element",
    },
    {
      question: "What is the significance of 'props.children' in React?",
      choices: ["It refers to the children components", "It is used for styling components", "It represents the content between the opening and closing tags of a component", "None of the above"],
      type: "MCQs",
      correctAnswer: "It represents the content between the opening and closing tags of a component",
    },
    {
      question: "What does the 'shouldComponentUpdate' method do in a React class component?",
      choices: ["It checks if the component should re-render", "It updates the component's state", "It determines the component's lifecycle stage", "None of the above"],
      type: "MCQs",
      correctAnswer: "It checks if the component should re-render",
    },
    {
      question: "What is the purpose of the 'classnames' library in React?",
      choices: ["To define class names for HTML elements", "To handle routing", "To manage state", "None of the above"],
      type: "MCQs",
      correctAnswer: "To define class names for HTML elements",
    },
    {
      question: "What is the role of the 'fetch' function in React for making API requests?",
      choices: ["To handle form submissions", "To create a new component", "To make asynchronous HTTP requests", "None of the above"],
      type: "MCQs",
      correctAnswer: "To make asynchronous HTTP requests",
    },
    {
      question: "What is the purpose of the 'memo' function in React?",
      choices: ["To create a memoized version of a component", "To manage global state", "To handle routing", "None of the above"],
      type: "MCQs",
      correctAnswer: "To create a memoized version of a component",
    },
    {
      question: "What is the purpose of the 'react-router-dom' library in a React project?",
      choices: ["To define class names for HTML elements", "To handle form submissions", "To manage the application's routing", "None of the above"],
      type: "MCQs",
      correctAnswer: "To manage the application's routing",
    },
    {
      question: "What is the role of the 'HOC' (Higher Order Component) pattern in React?",
      choices: ["To manage state", "To create reusable component logic", "To handle routing", "None of the above"],
      type: "MCQs",
      correctAnswer: "To create reusable component logic",
    },
    {
      question: "What is the purpose of the 'Redux Thunk' middleware in a React-Redux application?",
      choices: ["To handle asynchronous actions", "To manage component state", "To define class names for HTML elements", "None of the above"],
      type: "MCQs",
      correctAnswer: "To handle asynchronous actions",
    },
  ],
};

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
