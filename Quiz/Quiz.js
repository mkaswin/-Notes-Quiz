const questions =[
  {
    question:"which is largest animal in the world?",
    answers:[
      {text:"shark", correct:false},
      {text:"Blue whale", correct:true},
      {text:"elephant", correct:false},
      {text:"giraffe", correct:false},
      
    ]
  },
  {
    question:"which is samllest continent in the world?",
    answers:[
      {text:"asia", correct:false},
      {text:"Australia", correct:true},
      {text:"Artic", correct:false},
      {text:"Africa", correct:false},
      
    ]
  },
  {
    question:"which is largest Desert in the world?",
    answers:[
      {text:"Kalahari", correct:false},
      {text:"Gobi", correct:false},
      {text:"Sahara", correct:false},
      {text:"Antartica", correct:true},
      
    ]
  },
  {
    question:"which is largest statue in the world?",
    answers:[
      {text:"patel", correct:true},
      {text:"statue of liberty", correct:false},
      {text:"murudswer", correct:false},
      {text:"christ the redeemer", correct:false},
      
    ]
  },{
    question:"which is largest river in the world?",
    answers:[
      {text:"Amazon", correct:false},
      {text:"Ganga", correct:false},
      {text:"Nile", correct:true},
      {text:"Yellow river", correct:false},
      
    ]
  }

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQustionIndex =0;
 let score =0;

 function startQuiz() {
 
  currentQustionIndex =0;
  score =0;
  nextButton.innerHTML ="Next";
  showQuestion();
 }
 function showQuestion(){
  resetState();
  let currentQustion =questions[currentQustionIndex];
  let  questoinNo =currentQustionIndex +1;
  questionElement.innerHTML=questoinNo + ". " +currentQustion.question;

  currentQustion.answers.forEach(answer=>{
    const button =document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct =answer.correct;
    }
    button.addEventListener("click",selectAnswer);

  });
 }

 function resetState(){
  nextButton.style.display="none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
  }
 }
 function selectAnswer(e){
  const selectedBtn =e.target;
  const isCorrect =selectedBtn.dataset.correct ==="true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score ++;
  } else {
    selectedBtn.classList.add("incorrect");

  }
  Array.from(answerButton.children).forEach(button=>{
    if (button.dataset.correct ==="true") {
      button.classList.add("correct");
    }
    button.disabled ="true"
  });
  nextButton.style.display="block";
 }
 function showScore(){
  resetState();
  questionElement.innerHTML =`You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML="Play again";
  nextButton.style.display ="block";
 }

 function handleNextButton(){
  currentQustionIndex++;
  if(currentQustionIndex < questions.length){
    showQuestion();

  }
  else{
    showScore();
  }
 }


  nextButton.addEventListener("click",()=>{
    if(currentQustionIndex <questions.length){
      handleNextButton();
    }
    else{
      startQuiz();
    }
  })

 startQuiz();

 

