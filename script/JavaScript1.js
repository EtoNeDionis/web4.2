const Start = document.getElementById('startBtn')
const Question = document.getElementById('second_part')
const QuestionTxt = document.getElementById('qstText')
const Variants = document.getElementById('variants')
const Next = document.getElementById('next')
const CorrectAns = document.getElementById('num')
const Score = document.getElementById('score')
const Lobby = document.getElementById('lobby')

let currentQuestion = 0, CorrectAnswers = 0, shuffledQuestion;

onload: {
Question.classList.add('transparency')
Variants.classList.add('transparency')
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
        question: 'How many Crusade Wars have there been?',
        variants: ['5', '8', '11', '> 11'],
        answer: 1
    },
    {//2
        question: 'When Constantinople fell?',
        variants: ['1453', '230', '1107', '861'],
        answer: 0
    },
    {//3
        question: 'Year of christianization of Rus',
        variants: ['25', '345', '1047', '867'],
        answer: 3
    },
    {//4
        question: 'In which year did Columbus discover America',
        variants: ['1391', '1505', '1720', '1492'],
        answer: 3
    },
    {//5
        question: 'Who was defeated by Caesar in the Civil War?',
        variants: ['Pompey', 'Mark Antony', 'Cleopatra', 'Hannibal'],
        answer: 0
    },
    {//6
        question: 'Is Taiwan a country?',
        variants: ['Yes', 'Of course', 'No', 'I dont know'],
        answer: 2
    },
    {//7
        question: 'After which event almost started 3rd World War?',
        variants: ['Cold War', 'Vietnam War', 'Korean War', 'Caribbean crysis'],
        answer: 3
    },
    {//8
        question: '54321 - 12345 = ?',
        variants: ['41976', '40123', '49876', '41886'],
        answer: 0
    },
    {//9
        question: 'When was USSR created?',
        variants: ['1922', '1917', '1924', '1919'],
        answer: 0
    },
    {//10
        question: 'Around which river was gas first used for military purposes?',
        variants: ['Danube', 'Ypres', 'Ebro', 'Tiber'],
        answer: 1
    },
]