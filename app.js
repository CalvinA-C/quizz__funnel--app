const introduction = {
  title: "Hello Welcome",
  context: "Ready to start some js questions?",
};

const questions = [
  {
    question: "What is JavaScript",
    options: ["Html", "CSS", "JavaScript"],
    correctIndex: 2,
    type: "single",
  },
  {
    question: "What looks better?",
    options: ["Pink", "Blue", "Green"],
    correctIndex: 1,
    type: "single",
  },
  {
    question: "Select all Bad?",
    options: ["dat", "dis", "Tis"],
    correctIndice: [0, 1],
    type: "multiple",
  },
];

// Add Event Listener

const calculateResults = function calculate() {
  console.log("result");
};
calculateResults();

// Access the element with the ID 'root'
const rootElement = document.getElementById("root");

// Check if the element exists
if (rootElement) {
  // Modify the inner HTML of the element
  rootElement.innerHTML = introduction.title + `<br/>` + introduction.context;
}
