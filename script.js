const questions = [
  {
    question: "What is the English word for 'кошка'?",
    options: ["Dog", "Cat", "Bird"],
    answer: "Cat"
  },
  {
    question: "How do you say 'спасибо' in English?",
    options: ["Hello", "Goodbye", "Thank you"],
    answer: "Thank you"
  },
  {
    question: "What is the opposite of 'hot'?",
    options: ["Cold", "Warm", "Cool"],
    answer: "Cold"
  },
  {
    question: "Choose the correct article: ___ apple",
    options: ["A", "An", "The"],
    answer: "An"
  },
  {
    question: "Which is a color?",
    options: ["Chair", "Blue", "Run"],
    answer: "Blue"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    question: "Which word is a verb?",
    options: ["Jump", "Table", "Blue"],
    answer: "Jump"
  },
  {
    question: "How do you say 'мама' in English?",
    options: ["Mother", "Father", "Sister"],
    answer: "Mother"
  },
  {
    question: "What is the plural of 'child'?",
    options: ["Childs", "Children", "Childes"],
    answer: "Children"
  },
  {
    question: "What time is 'midnight'?",
    options: ["12 PM", "6 AM", "12 AM"],
    answer: "12 AM"
  },
  {
    question: "Which is a day of the week?",
    options: ["January", "Sunday", "Summer"],
    answer: "Sunday"
  },
  {
    question: "Which one is an animal?",
    options: ["Tiger", "Book", "Cup"],
    answer: "Tiger"
  },
  {
    question: "How do you say 'да' in English?",
    options: ["Yes", "No", "Maybe"],
    answer: "Yes"
  },
  {
    question: "Which is a fruit?",
    options: ["Apple", "Rock", "Paper"],
    answer: "Apple"
  },
  {
    question: "What is 'school'?",
    options: ["A place", "A color", "A person"],
    answer: "A place"
  },
  {
    question: "Which number comes after 5?",
    options: ["4", "6", "7"],
    answer: "6"
  },
  {
    question: "What is the English word for 'ручка' (для письма)?",
    options: ["Pencil", "Pen", "Paper"],
    answer: "Pen"
  },
  {
    question: "How do you say 'привет'?",
    options: ["Hello", "Bye", "Yes"],
    answer: "Hello"
  },
  {
    question: "Choose the correct form: He ___ a book.",
    options: ["read", "reads", "reading"],
    answer: "reads"
  },
  {
    question: "Which is a family member?",
    options: ["Uncle", "Laptop", "Window"],
    answer: "Uncle"
  }
];

function loadQuiz() {
  const container = document.getElementById('quiz-container');
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      <div class="options">
        ${q.options.map(option => `
          <label>
            <input type="radio" name="question${index}" value="${option}" />
            ${option}
          </label>
        `).join('')}
      </div>
    `;
    container.appendChild(questionDiv);
  });
}

document.getElementById('submit-button').addEventListener('click', () => {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  document.getElementById('result').textContent = `You scored ${score} out of ${questions.length}!`;
});

loadQuiz();
