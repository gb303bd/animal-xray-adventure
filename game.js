// SOUNDS
const xraySound = new Audio("SOUND/01-xray.mp3");
const correctSound = new Audio("SOUND/02-correct.mp3");
const celebrationSound = new Audio("SOUND/03-celebration.mp3");
const wrongSound = new Audio("SOUND/04-wrong.mp3");

const animals = [
    {
        name: "elephant",
        normal: "images/elephant.png",
        skeleton: "images/elephant-skeleton.png"
    },
    {
        name: "tiger",
        normal: "images/tiger.png",
        skeleton: "images/tiger-skeleton.png"
    },
    {
        name: "fish",
        normal: "images/fish.png",
        skeleton: "images/fish-skeleton.png"
    },
    {
        name: "giraffe",
        normal: "images/giraffe.png",
        skeleton: "images/giraffe-skeleton.png"
    },
    {
        name: "monkey",
        normal: "images/monkey.png",
        skeleton: "images/monkey-skeleton.png"
    },
    {
        name: "lion",
        normal: "images/lion.png",
        skeleton: "images/lion-skeleton.png"
    },
    {
        name: "panda",
        normal: "images/panda.png",
        skeleton: "images/panda-skeleton.png"
    },
    {
        name: "zebra",
        normal: "images/zebra.png",
        skeleton: "images/zebra-skeleton.png"
    },
    {
        name: "crocodile",
        normal: "images/crocodile.png",
        skeleton: "images/crocodile-skeleton.png"
    },
    {
        name: "rhino",
        normal: "images/rhino.png",
        skeleton: "images/rhino-skeleton.png"
    },

    // ANIMALS 11–30

    {
        name: "bear",
        normal: "images/bear.png",
        skeleton: "images/bear-skeleton.png"
    },
    {
        name: "deer",
        normal: "images/deer.png",
        skeleton: "images/deer-skeleton.png"
    },
    {
        name: "kangaroo",
        normal: "images/kangaroo.png",
        skeleton: "images/kangaroo-skeleton.png"
    },
    {
        name: "horse",
        normal: "images/horse.png",
        skeleton: "images/horse-skeleton.png"
    },
    {
        name: "cow",
        normal: "images/cow.png",
        skeleton: "images/cow-skeleton.png"
    },
    {
        name: "pig",
        normal: "images/pig.png",
        skeleton: "images/pig-skeleton.png"
    },
    {
        name: "goat",
        normal: "images/goat.png",
        skeleton: "images/goat-skeleton.png"
    },
    {
        name: "sheep",
        normal: "images/sheep.png",
        skeleton: "images/sheep-skeleton.png"
    },
    {
        name: "dog",
        normal: "images/dog.png",
        skeleton: "images/dog-skeleton.png"
    },
    {
        name: "cat",
        normal: "images/cat.png",
        skeleton: "images/cat-skeleton.png"
    },
    {
        name: "rabbit",
        normal: "images/rabbit.png",
        skeleton: "images/rabbit-skeleton.png"
    },
    {
        name: "fox",
        normal: "images/fox.png",
        skeleton: "images/fox-skeleton.png"
    },
    {
        name: "wolf",
        normal: "images/wolf.png",
        skeleton: "images/wolf-skeleton.png"
    },
    {
        name: "moose",
        normal: "images/moose.png",
        skeleton: "images/moose-skeleton.png"
    },
    {
        name: "hippo",
        normal: "images/hippo.png",
        skeleton: "images/hippo-skeleton.png"
    },
    {
        name: "leopard",
        normal: "images/leopard.png",
        skeleton: "images/leopard-skeleton.png"
    },
    {
        name: "cheetah",
        normal: "images/cheetah.png",
        skeleton: "images/cheetah-skeleton.png"
    },
    {
        name: "gorilla",
        normal: "images/gorilla.png",
        skeleton: "images/gorilla-skeleton.png"
    },
    {
        name: "orangutan",
        normal: "images/orangutan.png",
        skeleton: "images/orangutan-skeleton.png"
    },
    {
        name: "alligator",
        normal: "images/alligator.png",
        skeleton: "images/alligator-skeleton.png"
    }
];

let currentAnimal = 0;
let score = 0;
let xrayShown = false;
let questionAnswered = false;

const animalImage = document.getElementById("animalImage");
const animalName = document.getElementById("animalName");
const animalNumber = document.getElementById("animalNumber");
const scoreDisplay = document.getElementById("score");
const progressFill = document.getElementById("progressFill");
const instruction = document.getElementById("instruction");
const xrayButton = document.getElementById("xrayButton");
const nextButton = document.getElementById("nextButton");
const quizArea = document.getElementById("quizArea");
const answerButtons = document.getElementById("answerButtons");
const message = document.getElementById("message");
const finishScreen = document.getElementById("finishScreen");
const finalScore = document.getElementById("finalScore");
const restartButton = document.getElementById("restartButton");
const totalAnimals = document.getElementById("totalAnimals");

function loadAnimal() {
    totalAnimals.textContent = animals.length;

    const animal = animals[currentAnimal];

    xrayShown = false;
    questionAnswered = false;

    animalImage.src = animal.normal;
    animalImage.alt = animal.name;
    animalImage.classList.remove("xray");

    animalName.textContent = animal.name;

    instruction.textContent =
        "Can you discover the skeleton?";

    message.textContent = "";

    xrayButton.disabled = false;
    xrayButton.textContent = "🩻 SHOW X-RAY";

    nextButton.classList.add("hidden");

    quizArea.classList.add("hidden");

    answerButtons.innerHTML = "";

    animalNumber.textContent =
        currentAnimal + 1;

    const progress =
        ((currentAnimal + 1) / animals.length) * 100;

    progressFill.style.width =
        progress + "%";

    scoreDisplay.textContent = score;
}

function showXRay() {

    if (xrayShown) return;

    const animal = animals[currentAnimal];

    xrayShown = true;

    xraySound.currentTime = 0;
    xraySound.play();

    animalImage.src = animal.skeleton;

    animalImage.alt =
        animal.name + " skeleton";

    animalImage.classList.add("xray");

    animalName.textContent =
        animal.name + " Skeleton";

    instruction.textContent =
        "WOW! Look at the skeleton!";

    message.textContent =
        "🦴 Amazing discovery!";

    xrayButton.disabled = true;

    xrayButton.textContent =
        "🦴 X-RAY SHOWN";

    setTimeout(() => {
        showQuiz();
    }, 700);
}

function showQuiz() {

    quizArea.classList.remove("hidden");

    instruction.textContent =
        "🤔 What animal is this?";

    createAnswerButtons();
}

function createAnswerButtons() {

    answerButtons.innerHTML = "";

    const correctAnswer =
        animals[currentAnimal].name;

    let wrongAnswers = animals
        .filter(animal =>
            animal.name !== correctAnswer
        )
        .map(animal =>
            animal.name
        );

    wrongAnswers =
        wrongAnswers.sort(
            () => Math.random() - 0.5
        );

    let choices = [
        correctAnswer,
        wrongAnswers[0],
        wrongAnswers[1]
    ];

    choices =
        choices.sort(
            () => Math.random() - 0.5
        );

    choices.forEach(choice => {

        const button =
            document.createElement("button");

        button.className =
            "answer-button";

        button.textContent =
            choice;

        button.addEventListener(
            "click",
            () => {
                checkAnswer(
                    choice,
                    button
                );
            }
        );

        answerButtons.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, selectedButton) {

    if (questionAnswered) return;

    questionAnswered = true;

    const correctAnswer =
        animals[currentAnimal].name;

    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {

        correctSound.currentTime = 0;
        correctSound.play();

        score += 10;

        selectedButton.classList.add(
            "correct"
        );

        message.textContent =
            "🎉 CORRECT! Great job! ⭐";

        scoreDisplay.textContent =
            score;

    } else {
        
    

    wrongSound.currentTime = 0;
    wrongSound.play();

    selectedButton.classList.add(
        "wrong"
    );

        message.textContent =
            "💡 Nice try! The answer is " +
            correctAnswer +
            ".";

        buttons.forEach(button => {

            if (
                button.textContent ===
                correctAnswer
            ) {
                button.classList.add(
                    "correct"
                );
            }

        });
    }

    nextButton.classList.remove(
        "hidden"
    );
}

function nextAnimal() {

    currentAnimal++;

    if (
        currentAnimal >=
        animals.length
    ) {
        showFinish();
        return;
    }

    loadAnimal();
}

function showFinish() {

    celebrationSound.currentTime = 0;
    celebrationSound.play();

    document
        .querySelector(".game-area")
        .classList.add("hidden");

    document
        .querySelector(".progress-area")
        .classList.add("hidden");

    finalScore.textContent =
        score + " / " +
        (animals.length * 10);

    finishScreen.classList.remove(
        "hidden"
    );
}

function restartGame() {

    currentAnimal = 0;

    score = 0;

    finishScreen.classList.add(
        "hidden"
    );

    document
        .querySelector(".game-area")
        .classList.remove("hidden");

    document
        .querySelector(".progress-area")
        .classList.remove("hidden");

    loadAnimal();
}

xrayButton.addEventListener(
    "click",
    showXRay
);

nextButton.addEventListener(
    "click",
    nextAnimal
);

restartButton.addEventListener(
    "click",
    restartGame
);

loadAnimal();


// START SCREEN

const startScreen =
    document.getElementById("startScreen");

const startButton =
    document.getElementById("startButton");

const gameContainer =
    document.querySelector(".game-container");

startButton.addEventListener("click", () => {

    startScreen.classList.add("hidden");

    gameContainer.classList.remove(
        "game-not-started"
    );

    loadAnimal();

});
