const quizData = [
    {
        question: "Which angel delivered revelations to the Prophet Muhammad (peace be upon him)?",
        options: ["Angel Gabriel", "Angel Israfil", "Angel Michael", "Angel Raphael"],
        correctAnswer: "Angel Gabriel"
    },
    {
        question: "What is the name of the first wife of Prophet Muhammad (peace be upon him)?",
        options: ["Khadijah", "Aisha", "Hafsa", "Zainab"],
        correctAnswer: "Khadijah"
    },
    {
        question: "What is the name of the holy book revealed to Prophet Musa (Moses)?",
        options: ["Zabur", "Injil", "Torah", "Quran"],
        correctAnswer: "Torah"
    },

    {
        question: "What is the first revelation of the Quran called?",
        options: ["Surah Al-Fatihah", "Surah Al-Baqarah", "Surah Al-Ikhlas", "Surah Al-Alaq"],
        correctAnswer: "Surah Al-Alaq"
    }

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
    }
}

function showResult() {
    resultElement.textContent = `Quiz Completed! Your Score: ${score}/${quizData.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        showResult();
    }
});

// Initial display
displayQuestion();
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(optionElement, option));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(optionElement, selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    // Remove selection from previously selected option
    const selectedOptions = document.querySelectorAll('.selected');
    selectedOptions.forEach(option => {
        option.classList.remove('selected');
        option.style.color = ''; // Reset color
        option.style.fontSize = ''; // Reset font size
    });

    // Apply selection to the clicked option
    optionElement.classList.add('selected');
    optionElement.style.color = 'green'; // Change color
    optionElement.style.fontSize = '18px'; // Change font size
}
