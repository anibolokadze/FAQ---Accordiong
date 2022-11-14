let questionList = document.querySelectorAll('button')
let arrow = document.querySelectorAll('.arrow');
let questions = document.querySelectorAll('.q');
let showClicked = document.querySelectorAll('.showClicked');

for(let i = 0; i < questionList.length; i++){
    questionList[i].addEventListener('click',function(){
        arrow[i].classList.toggle("arrowUp");
        questions[i].classList.toggle("title-updated");
        showClicked[i].classList.toggle("showClicked");
    })
}