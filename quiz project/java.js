const questions = [
    { question: "What is the capital of France?", choices: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris", level: "Easy" },
    { question: "What is 2 + 2?", choices: ["3", "4", "5", "6"], answer: "4", level: "Easy" },
    { question: "What is the largest planet in our solar system?", choices: ["Jupiter", "Saturn", "Mars", "Earth"], answer: "Jupiter", level: "Intermediate" },
    { question: "What is the chemical symbol for water?", choices: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O", level: "Intermediate" },
    { question: "Who wrote 'Romeo and Juliet'?", choices: ["Shakespeare", "Hemingway", "Dickens", "Austen"], answer: "Shakespeare", level: "Hard" },
    { question: "What is the powerhouse of the cell?", choices: ["Mitochondria", "Nucleus", "Endoplasmic reticulum", "Golgi apparatus"], answer: "Mitochondria", level: "Hard" }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let currentLevel = "Easy"; // Initial level
  
  // DOM elements
  const quizElement = document.getElementById('quiz');
  const questionContainer = document.getElementById('question-container');
  const choicesContainer = document.getElementById('choices-container');
  const nextButton = document.getElementById('next-btn');
  const levelIndicator = document.getElementById('level-indicator');
  const scoreElement = document.getElementById('score');
  const resultContainer = document.getElementById('result');
  const resultTitle = document.getElementById('result-title');
  const resultScore = document.getElementById('result-score');
  const restartButton = document.getElementById('restart-btn');
  
  // Function to display question
  function displayQuestion() {
    const question = questions[currentQuestion];
    questionContainer.textContent = question.question;
    choicesContainer.innerHTML = '';
    question.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.onclick = () => checkAnswer(choice);
      choicesContainer.appendChild(button);
    });
    levelIndicator.textContent = `Level: ${question.level}`;
  }
  
  // Function to check answer
  function checkAnswer(choice) {
    const question = questions[currentQuestion];
    if (choice === question.answer) {
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to show result
  function showResult() {
    quizElement.style.display = 'none';
    resultContainer.style.display = 'block';
    resultTitle.textContent = 'Quiz Completed!';
    resultScore.textContent = `Your score is ${score}/${questions.length}`;
    restartButton.addEventListener('click', restartQuiz);
  }
  
  // Function to restart quiz
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    currentLevel = "Easy"; // Reset level
    quizElement.style.display = 'block';
    resultContainer.style.display = 'none';
    scoreElement.textContent = 'Score: 0';
    displayQuestion();
  }
  
  // Start quiz
  displayQuestion();
  