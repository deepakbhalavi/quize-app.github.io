const questions = [
    {
      category: "programming",
      questions: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is a correct way to declare a variable in JavaScript?",
          options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
          correctAnswer: 0,
        },
        {
          question: "How do you write comment in Python?",
          options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
          correctAnswer: 1,
        },
        {
          question: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
          correctAnswer: 0,
        },
        {
          question: "In JavaScript, how do you create a function?",
          options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'typeof' operator do in JavaScript?",
          options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
          correctAnswer: 0,
        },
        {
          question: "In C, how do you define a function?",
          options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is a characteristic of Python?",
          options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
          correctAnswer: 3,
        },
        {
          question: "Which language is used for Android development?",
          options: ["Python", "Java", "JavaScript", "C++"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the 'forEach()' method in JavaScript?",
          options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'return' keyword do in a function?",
          options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a semantic HTML element?",
          options: ["<header>", "<footer>", "<div>", "<article>"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary purpose of a 'for' loop in programming?",
          options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
          correctAnswer: 0,
        },
        {
          question: "Which data structure is ideal for LIFO (Last In First Out)?",
          options: ["Queue", "Stack", "Linked list", "Array"],
          correctAnswer: 1,
        },
        {
          question: "Which command is used in Git to store changes in the repository?",
          options: ["git commit", "git push", "git pull", "git add"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'map()' function do in JavaScript?",
          options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
          correctAnswer: 2,
        },
        {
          question: "What is an IDE?",
          options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is a feature of object-oriented programming?",
          options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
          correctAnswer: 0,
        },
        {
          question: "What does SQL stand for?",
          options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
          correctAnswer: 3,
        },
        {
          question: "Which of these is an example of a non-relational database?",
          options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
          correctAnswer: 0,
        },
        {
          question: "How do you write comment in CSS?",
          options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following algorithms is used to sort an array by comparing elements?",
          options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'finally' block in Java do?",
          options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
          correctAnswer: 2,
        },
        {
          question: "Which data structure is best for searching elements quickly?",
          options: ["Binary search tree", "Array", "Linked list", "Queue"],
          correctAnswer: 0,
        },
        {
          question: "What is the correct syntax for a JavaScript if statement?",
          options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
          correctAnswer: 0,
        },
      ],
    },
  
    {
      category: "geography",
      questions: [
        {
          question: "Which is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "South Korea", "Japan", "Thailand"],
          correctAnswer: 2,
        },
        {
          question: "What is the largest ocean in the world?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which country has the largest population in the world?",
          options: ["India", "China", "United States", "Indonesia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Great Barrier Reef?",
          options: ["Australia", "United States", "South Africa", "New Zealand"],
          correctAnswer: 0,
        },
        {
          question: "Which is the smallest country in the world?",
          options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
          correctAnswer: 2,
        },
        {
          question: "Which is the tallest mountain in the world?",
          options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
          correctAnswer: 2,
        },
        {
          question: "What is the capital of Canada?",
          options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
          correctAnswer: 0,
        },
        {
          question: "Which desert is the largest hot desert in the world?",
          options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
          correctAnswer: 2,
        },
        {
          question: "Which country is known as the Land of the Midnight Sun?",
          options: ["Sweden", "Finland", "Norway", "Denmark"],
          correctAnswer: 2,
        },
        {
          question: "What is the longest mountain range in the world?",
          options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
          correctAnswer: 2,
        },
        {
          question: "Which river flows through Egypt?",
          options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
          correctAnswer: 2,
        },
        {
          question: "Which is the largest island in the world?",
          options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
          correctAnswer: 0,
        },
        {
          question: "What is the capital of Japan?",
          options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most time zones?",
          options: ["United States", "Russia", "Canada", "Australia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Eiffel Tower?",
          options: ["Germany", "Italy", "Spain", "France"],
          correctAnswer: 3,
        },
        {
          question: "Which is the most populous city in the world?",
          options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
          correctAnswer: 0,
        },
        {
          question: "Which mountain range is located in South America?",
          options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
          correctAnswer: 3,
        },
        {
          question: "Which continent is known as the 'Dark Continent'?",
          options: ["Asia", "Africa", "South America", "Europe"],
          correctAnswer: 1,
        },
        {
          question: "What is the capital of Brazil?",
          options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
          correctAnswer: 2,
        },
        {
          question: "What is the official language of Brazil?",
          options: ["Spanish", "English", "Portuguese", "French"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most volcanoes?",
          options: ["Japan", "Indonesia", "United States", "Italy"],
          correctAnswer: 1,
        },
        {
          question: "Which city is known as the Big Apple?",
          options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
          correctAnswer: 1,
        },
        {
          question: "Which ocean is located to the east of Africa?",
          options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which is the second largest continent by area?",
          options: ["Asia", "Africa", "North America", "Europe"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "mathematics",
      questions: [
        {
          question: "What is the square root of 144?",
          options: ["10", "11", "12", "13"],
          correctAnswer: 2,
        },
        {
          question: "What is 15 × 13?",
          options: ["180", "185", "195", "200"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 8³?",
          options: ["512", "216", "256", "128"],
          correctAnswer: 0,
        },
        {
          question: "What is 48 ÷ 6?",
          options: ["7", "8", "9", "10"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 3 + 5 × 4?",
          options: ["20", "22", "24", "23"],
          correctAnswer: 3,
        },
        {
          question: "What is the sum of the angles in a triangle?",
          options: ["180°", "360°", "90°", "270°"],
          correctAnswer: 0,
        },
        {
          question: "What is the perimeter of a square with a side length of 4 cm?",
          options: ["12 cm", "16 cm", "20 cm", "24 cm"],
          correctAnswer: 1,
        },
        {
          question: "What is 11²?",
          options: ["121", "131", "141", "111"],
          correctAnswer: 0,
        },
        {
          question: "What is 9 × 12?",
          options: ["105", "110", "108", "120"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 16 ÷ 4?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 2,
        },
        {
          question: "What is 25% of 200?",
          options: ["30", "40", "50", "60"],
          correctAnswer: 2,
        },
        {
          question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
          options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 ÷ 2 + 3?",
          options: ["8", "7", "9", "6"],
          correctAnswer: 0,
        },
        {
          question: "What is 3 × 7 + 2?",
          options: ["20", "21", "22", "23"],
          correctAnswer: 3,
        },
        {
          question: "What is the greatest common divisor (GCD) of 24 and 36?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 3,
        },
        {
          question: "What is the least common multiple (LCM) of 6 and 8?",
          options: ["24", "32", "48", "56"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 2³ × 3?",
          options: ["12", "15", "18", "24"],
          correctAnswer: 3,
        },
        {
          question: "What is the value of 10 × (5 + 3)?",
          options: ["80", "70", "60", "50"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 14 × 14?",
          options: ["186", "196", "206", "216"],
          correctAnswer: 1,
        },
        {
          question: "What is the sum of the first 10 positive integers?",
          options: ["50", "55", "60", "65"],
          correctAnswer: 1,
        },
        {
          question: "What is 12 × 15?",
          options: ["150", "160", "170", "180"],
          correctAnswer: 3,
        },
        {
          question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
          options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of (8 + 2) × 3?",
          options: ["30", "32", "34", "28"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 50% of 80?",
          options: ["30", "35", "40", "45"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 25 ÷ 5 × 3?",
          options: ["12", "15", "18", "20"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "cricket",
      questions: [
        {
          question: " How many players are there in each cricket team on the field during a match?",
          options: ["8", "10", "11", "12"],
          correctAnswer: 2,
        },
        {
          question: "What is the name of the three wooden stumps topped by two bails on which the ball is aimed?",
          options: ["Wicket", "Pitch", "Boundary", "Crease"],
          correctAnswer: 0,
        },
        {
          question: "Which format of cricket involves two teams playing a single match over a maximum of 50 overs per side?",
          options: ["Test Match", "ODI(One Day  International)", "T20 ", "None Of This"],
          correctAnswer: 1,
        },
        {
          question: "What is the term used to describe a batsman who scores 100 runs or more in an innings?",
          options: ["WicketKeeper", "Captain", "All-Rounder", "Centurian"],
          correctAnswer: 3,
        },
        {
          question: " Which country is considered the birthplace of cricket?",
          options: ["India", "Australia", "England", "South-Africa"],
          correctAnswer: 2,
        },
        {
          question: "How many runs are awarded for hitting the ball over the boundary rope without it bouncing?",
          options: ["2", "1", "4", "6"],
          correctAnswer: 3,
        },
        {
          question: "What is the name of the flat, oval-shaped area in the center of the field where the bowler runs to deliver the ball?",
          options: ["Pitch", "Squre", "Boundary", "Wicket"],
          correctAnswer: 0,
        },
        {
          question: "Which bowler holds the record for the most wickets taken in Test cricket history?",
          options: ["Shane Warne (Australia)", " Glenn McGrath (Australia)", "Muttiah Muralitharan (Sri Lanka)", "James Anderson (England)"],
          correctAnswer: 2,
        },
        {
          question: "What is the name of the prestigious trophy awarded to the winner of the Cricket World Cup?",
          options: ["The Ashes", "The Oval Trophy", "The Champions Trophy", "The ICC Cricket World Cup"],
          correctAnswer: 3,
        },
        {
          question: "Which batting position traditionally involves opening the innings and facing the first deliveries?",
          options: ["Wicket-Keeper", "Spiner", "Pace bowler", "Opener"],
          correctAnswer: 3,
        },
        {
          question: "Who won the first ICC Cricket World Cup in 1975?",
          options: ["West Indies", "Australia", "India", "Englend"],
          correctAnswer: 0,
        },
        {
          question: " Which country has won the most ICC Cricket World Cups?",
          options: ["India", "Englend", "Sri Lanka", "Austrlia"],
          correctAnswer: 3,
        },
        {
          question: "Who scored the highest individual score in a World Cup match?",
          options: ["Rohit Sharma", "Sachin Tendulkar", "Martin Gaptil", " Chris Gayle"],
          correctAnswer: 2,
        },
        {
          question: "Which country hosted the ICC Cricket World Cup in 2019?",
          options: ["Pakistan", "India", "Austrlia", "Englend"],
          correctAnswer: 3,
        },
        {
          question: "Who was the captain of the Indian team during the 1983 World Cup?",
          options: ["Sachin Tendulkar", "Kapil Dev", "Ravi Shastrii", "Sunil Gavaskar"],
          correctAnswer: 1,
        },
        {
          question: "Which team did India defeat in the 2011 World Cup final?",
          options: ["Sri Lanka", "Pakistan", "Bangladesh", "Newzealand"],
          correctAnswer: 0,
        },
        {
          question: "Who was the leading wicket-taker in the 2019 World Cup?",
          options: ["Jofara Archer", "Mitchel Stark", "Jasprit Bumrah", "Trent Bolt"],
          correctAnswer: 1,
        },
        {
          question: "Which player has the most centuries in World Cup history?",
          options: ["Rohit Sharma", "Sachin Tendulkar", "Devid Warner", "Virat Kholi"],
          correctAnswer: 1,
        },
        {
          question: "Who was the Player of the Tournament in the 2019 World Cup?",
          options: ["Saqib Ul Hasan", "Rohit Sharma", "Ben Stokes", "Kane Willimson"],
          correctAnswer: 3,
        },
        {
          question: "Which team won the first IPL title in 2008?",
          options: ["Rajistan Royals", "Chenai Super Kings", "Mumbai Indians", "Kolkata Night Riders"],
          correctAnswer: 0,
        },
        {
          question: "Who is the highest run-scorer in IPL history?",
          options: ["Suresh Raina", "Virat Kholi", "Devid Warner", "Rohit Shrama"],
          correctAnswer: 1,
        },
        {
          question: "Which bowler has taken the most wickets in IPL history?",
          options: ["Sunil Narine", "Amit Mishra", "Lasit Malinga", "Bhumneshwar Kumar"],
          correctAnswer: 2,
        },
        {
          question: "Who holds the record for the fastest century in IPL?",
          options: ["Crish Gayle", "Rohit Sharma", "Virat Kholi", "Ab Devillers"],
          correctAnswer: 0,
        },
        {
          question: "What does LBW stand for in cricket?",
          options: ["Leg Before Wicket", "Leg Beside Wicket", "Leg Behind Wicket", "Leg Between Wicket"],
          correctAnswer: 0,
        },
        {
          question: "How many overs are there in a One Day International (ODI) cricket match?",
          options: ["60", "20", "100", "50"],
          correctAnswer: 3,
        },
      ],
    },
  ]
let numberOfQustrion = '10'
let quizCategory="programming";
let conFigContainer = document.querySelector(".config-container");
let QuizetimeLimit = 15;
let currentTIme =  QuizetimeLimit;
let timer = null;
let timeDuration = document.querySelector(".time-duration");
let ansOpt = document.querySelector(".ans-option");
let ansOpt2 = document.querySelector(".ans-options");
let qustionStatus = document.querySelector(".qustion-status");
let currentQustion = null;
let qustionsIndexhistory = [];
let resultContainer = document.querySelector(".result-container");
let quizContainer = document.querySelector(".quize-container");
let resultMess = document.querySelector('.result-message');
let correctAnsCount = 0;
let nextBtn = document.querySelector(".next-qustion")

let resetTimer =()=> {
  clearInterval(timer);
  currentTIme=QuizetimeLimit;
  timeDuration.textContent=`${currentTIme}s`
}
let startTimer = () => {
  timer = setInterval(()=> {
    currentTIme--;
    timeDuration.textContent=`${currentTIme}s`
    if(currentTIme <=0) {
      clearInterval(timer);
      highlightCorrectAnswer();
      ansOpt.querySelectorAll(".ans-options").forEach(option => option.style.pointerEvents ="none")
      nextBtn.style.visibility ='visible';
    }
  },1000)
}
let showQuizResult =()=> {
  quizContainer.style.display = 'none'
  resultContainer.style.display="block";
  resultMess.innerHTML=`You answered <b>${correctAnsCount}</b> out of <b>${numberOfQustrion}</b> qustions correctly. Great effort`
}
let getRandomeQustions =()=> {
    let categoryQustions = questions.find(cat => cat.category.toLocaleLowerCase() === quizCategory.toLocaleLowerCase()).questions ||[];
    if(qustionsIndexhistory.length >= Math.min(categoryQustions.length,numberOfQustrion)) {
      return showQuizResult();
    }
    const avilabelQustion = categoryQustions.filter((_, index)=> !qustionsIndexhistory.includes(index));
    let randomeQustions = avilabelQustion[Math.floor(Math.random()*avilabelQustion.length)];
    qustionsIndexhistory.push(categoryQustions.indexOf(randomeQustions));
    return randomeQustions;
  }

let highlightCorrectAnswer =()=> {
    const correctOption = ansOpt.querySelectorAll(".ans-options")[currentQustion.correctAnswer]
    correctOption.classList.add("correct");
    const iconHTML =  `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML('beforeend',iconHTML)
}
let handleAnswer = (option,ansindex)=> {
  clearInterval(timer);
    const isCorrect = currentQustion.correctAnswer === ansindex;
    option.classList.add(isCorrect ?'correct':'incorrect');
    !isCorrect ? highlightCorrectAnswer():correctAnsCount++;
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect?'check_circle':'cancel'}</span>`
    option.insertAdjacentHTML("beforeend",iconHTML)
    ansOpt.querySelectorAll(".ans-options").forEach(option => option.style.pointerEvents ="none")
    nextBtn.style.visibility ='visible';
}
let randerQustions = () => {
   currentQustion = getRandomeQustions();
    if(!currentQustion) return;
    resetTimer();
    startTimer();
    ansOpt.innerHTML=""
    nextBtn.style.visibility ='hidden';
    document.querySelector(".qustion-text").textContent=currentQustion.question;  
    qustionStatus.innerHTML=`<b>${qustionsIndexhistory.length}</b> of <b>${numberOfQustrion}</b> Qustions`
    currentQustion.options.forEach((option,index) => {
        let li = document.createElement("li")
        li.classList.add('ans-options');
        li.textContent = option
        ansOpt.appendChild(li)
        li.addEventListener('click',()=> handleAnswer(li,index));
    })
}
let startQuiz =()=> {
  qustionsIndexhistory.length = 0;
  conFigContainer.style.display="none";
  quizContainer.style.display="block";
  quizCategory=conFigContainer.querySelector(".category-option.active").textContent;
  numberOfQustrion = parseInt(conFigContainer.querySelector(".qustion-option.active").textContent);
  randerQustions();
}
document.querySelectorAll(".category-option, .qustion-option").forEach(option=> {
  option.addEventListener('click',()=> {
    option.parentNode.querySelector(".active").classList.remove("active");
    option.classList.add('active');
  });
});
let quizeReset = () => {
  resetTimer();
  correctAnsCount=0;
  qustionsIndexhistory.length = 0;
  conFigContainer.style.display="block";
  resultContainer.style.display="none"
}
randerQustions();
nextBtn.addEventListener('click',randerQustions);
document.querySelector(".try-again").addEventListener('click',quizeReset)
document.querySelector(".start-quiz-btn").addEventListener('click',startQuiz)