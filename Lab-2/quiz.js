
function Quiz(questions) {
    this.score = 0;
    this.currQuestIndex = 0;
    this.questions = questions;
  }
  
  Quiz.prototype.getQuestion = function () {
    return this.questions[this.currQuestIndex];
  };
  
  Quiz.prototype.isEnded = function () {
    return this.currQuestIndex === this.questions.length;
  };
  
  Quiz.prototype.validateAnswerAndUpdateScore = function (choice) {
    let question = this.getQuestion();
    if (question.answer === choice) {
      this.score++;
    }
    this.currQuestIndex++;
  };
  
  function Question(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
  }

let questions = [
    new Question("1.Who is the current Captain of Indian Cricket Team ?", 
    [   "Virat Kohli",
        "M.S.Dhoni",
        "Rohit Sharma",
        "Hardik Pandya"],
        "Rohit Sharma"
    ),

    new Question(
        "What is the National Enblem of India?",
        ["Ashok Chakra", "Peocock", "Ashok Stambh", "3 Lions"],
        "3 Lions"
    ),
    new Question(
        "Who wrote 'Vande Mataram'?",
        ["Rabindranath Tagore", "Bankim Chatterjee", "premChand", "R.K.Gupta"],
        "Bankim Chatterjee"
    ),
    new Question(
        "Which is not among the seven wonders of India?",
        ["Red Fort","India Gate","Tirupati Temple","Meenakshi Temple"],
        "Tirupati Temple"
    )
];

function showScores() {
    console.log("Scores :-", quiz.score);
    let gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += `<h2 id='score'> Your Scores:- ${
      quiz.score
    } 
    and mark percentage is :- ${(quiz.score / questions.length) * 100}% </h1>`;
    document.getElementById("quiz").innerHTML = gameOverHTML;
  }
  
  function loadQuestions() {
    if (quiz.isEnded()) {
      showScores();
    } else {
    
      let curQuest = quiz.getQuestion();
      if (curQuest.text) {
        let questionEle = document.getElementById("question");
        questionEle.innerHTML = curQuest.text;
  
      
        let options = curQuest.options;
        for (var i = 0; i < options.length; i++) {
          let currOption = options[i];
          let eachOptElement = document.getElementById("choice" + i);
          eachOptElement.innerHTML = currOption;
          handleOptionBtn("btn" + i, currOption);
        }
      } 
      showProgress();
    }
  }
  
  function showProgress() {
    let curQuestNumber = quiz.currQuestIndex + 1;
    let progress = document.getElementById("progress");
    progress.innerHTML = `Question ${curQuestNumber} of ${quiz.questions.length}`;
  }
  
  function handleOptionBtn(btnId, choice) {
    let btn = document.getElementById(btnId);
    btn.onclick = () => {
      quiz.validateAnswerAndUpdateScore(choice);
      loadQuestions();
    };
  }
  
  let quiz = new Quiz(questions);

  loadQuestions();
