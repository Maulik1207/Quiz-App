let questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the speed of light?",
        answers: [
            { text: "300,000 km/s", correct: true },
            { text: "150,000 km/s", correct: false },
            { text: "450,000 km/s", correct: false },
            { text: "600,000 km/s", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Claude Monet", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    }
]

let questionElement = document.getElementById("question")
let answerButton = document.getElementById("answer-btn")
let nextButton = document.getElementById("next-btn")


let curruntQuestionIndex = 0
let score = 0


function startQuiz(){
    curruntQuestionIndex = 0;
    score = 0;
    
    nextButton.innerHTML = "Next";
    
    showQuestion()
}

function showQuestion(){
    resetState()
    let curruntQuestion = questions[curruntQuestionIndex];
    let questionNo = curruntQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + curruntQuestion.question;

    curruntQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener("click", selectAnswer)
    })
    
    nextButton.style.display = "none"
}



function resetState(){
    nextButton.style.display = "none"
   
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
   
    if(isCorrect){
        selectedBtn.classList.add("correct")
        
        score++;
        
    }
    else{
        selectedBtn.classList.add("incorrect")
        
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
    
}
function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
   
}

function handelNextbutton(){
    curruntQuestionIndex++
    if(curruntQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}



nextButton.addEventListener("click", () =>{
    if(curruntQuestionIndex < questions.length){
        handelNextbutton()
    }
    else{
        startQuiz()
    }
})

    

startQuiz()
