var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex 




startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})




function startGame() {
    
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.innerText
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    }) 
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.chlidren).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
}   else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}


var questions = [
   {
    question: 'which of the following keywords is used to define  a variable ?',
    answers: [

        { text: 'var', correct: false },
        {text: 'Let', correct: false},
        {text: 'A & B', correct: true},
        {text: 'none of the above', correct: false}


    ]
    }, 

    {
        question: 'which of the following methods could be used to display data in some form using JavaScript.',
        answers: [

            {text: 'document.write()', correct: false },
            {text: 'console.log()', correct: false},
            {text: 'window.alert()', correct: false},
            {text: 'All of the above', correct: true }
        ]
    },

    {
        question: 'How can a data type be declared to be a constant type.',
        answers: [

            {text: 'const', correct: true },
            {text: 'var', correct: false},
            {text: 'let', correct: false},
            {text: 'constant', correct: false }
        ]
    },

    {
        question: 'How to stop an interval time in JavaScript.',
        answers: [

            {text: 'clearInterval', correct: true },
            {text: 'clearTimer', correct: false},
            {text: 'intervalOver', correct: false},
            {text: 'None of the above', correct: false }
        ]
    },

    {
        question: 'how do we write a comment in JavaScript.',
        answers: [

            {text: '//', correct: false },
            {text: '#', correct: false},
            {text: '$ $', correct: false},
            {text: '/: :/', correct: true }
        ]
    }



]