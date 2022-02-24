﻿const Start = document.getElementById('startBtn')
const Question = document.getElementById('second_part')
const QuestionTxt = document.getElementById('qstText')
const Variants = document.getElementById('variants')
const Next = document.getElementById('next')
const CorrectAns = document.getElementById('num')
const Video = document.getElementById('video_end')
const Score = document.getElementById('score')
const Lobby = document.getElementById('lobby')

let currentQuestion = 0, CorrectAnswers = 0, shuffledQuestion;

onload: {
Question.classList.add('transparency')
Variants.classList.add('transparency')
Video.classList.add('transparency')
Lobby.classList.add('none')
}

Start.onclick = function () {
    Start.classList.add('none')
    document.getElementById('text').classList.add('none')
    document.getElementById('logo').classList.add('none')
    Question.classList.remove('transparency')
    Variants.classList.remove('transparency')
    Next.classList.remove('transparency')
    
    shuffledQuestion = questions.sort(()=> .5 - Math.random())

    resetState()
}

Lobby.onclick = function(){
    location.href='index.html'
}

function getQuestion() {
    //get question text
    if (currentQuestion == 10) {
        QuestionTxt.innerText = "FINAL SCORE: " + CorrectAnswers + " / 10"
        Video.classList.remove('transparency')
        Video.play()
        document.getElementById('version').classList.add('none')
        Variants.classList.add('none')
        document.getElementById('qstBox').classList.add('none')
        Score.classList.add('end')
        Lobby.classList.remove('none')
    }
    else {
        console.log(shuffledQuestion)
        QuestionTxt.innerText = shuffledQuestion[currentQuestion].question
        for (let i = 0; i < 4; i++) {
            const button = document.createElement('button')
            button.innerText = questions[currentQuestion].variants[i]
            button.classList.add('btn')
            button.id = i
            Variants.appendChild(button)
            button.setAttribute('onclick', 'checkAnswer(this)');
        }
    }
    //get variants text
}

Next.addEventListener('click', () => {
    currentQuestion++
    resetState()
})

function checkAnswer(selectedBtn) {
    if (selectedBtn.id == questions[currentQuestion].answer) {
        CorrectAns.innerText = ++CorrectAnswers
        Next.classList.remove('transparency')
        selectedBtn.classList.add('correct')
        Next.classList.add('correct');
    }
    else {
        Next.classList.remove('transparency')
        selectedBtn.classList.add('wrong')
        Next.classList.add('wrong')
        Variants.children[questions[currentQuestion].answer].classList.add('correct')
    }
    document.body.classList.add('answered')
    stopClicking()
}

function stopClicking() {
    for (let i = 0; i < 4; i++) {
        Variants.children[i].classList.add('answered')
    }
}

function resetState() {
    Next.classList.add('transparency')
    Next.classList.remove('wrong')
    Next.classList.remove('correct')
    while (Variants.firstChild) {
        Variants.removeChild(Variants.firstChild)
    }
    getQuestion()
}


//all 10 questions
const questions = [
    {//1
        question: 'Which is the largest waterfall in the world?',
        variants: ['Niagara Falls', 'Angel Falls', 'Ruacana Falls', 'Victoria Falls'],
        answer: 1
    },
    {//2
        question: 'The closest planet to the Sun',
        variants: ['Mars', 'Mercury', 'Venus', 'Uranus'],
        answer: 1
    },
    {//3
        question: 'Fog forms',
        variants: ['before the Sun rises', 'in the afternoon', 'in the evening', 'in the daytime'],
        answer: 0
    },
    {//4
        question: 'In which year did Columbus discover America',
        variants: ['1391', '1505', '1720', '1492'],
        answer: 3
    },
    {//5
        question: 'Light wind blowing on the coast and changing direction 2 times a day',
        variants: ['breeze', 'monsoon', 'sea', 'passat'],
        answer: 0
    },
    {//6
        question: 'The mountains separating Europe and Asia',
        variants: ['Himalayas', 'Everest', 'Ararat', 'Ural'],
        answer: 3
    },
    {//7
        question: 'What instrument measures the movement of the Earths crust?',
        variants: ['seismograph', 'vane', 'hygrometer', 'barometer'],
        answer: 0
    },
    {//8
        question: 'What is the length of the equator?',
        variants: ['20,000 km', '30,000 km', '40,000 km', '50,000 km'],
        answer: 2
    },
    {//9
        question: 'What is the largest country in Africa?',
        variants: ['Nigeria', 'South Africa', 'Algeria', 'Congo'],
        answer: 2
    },
    {//10
        question: 'A complete revolution of the Earth around the Sun takes 365 days and ',
        variants: ['2 hours', '6 hours', '4 hours', '8 hours'],
        answer: 1
    },
]