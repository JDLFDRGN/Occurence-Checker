let result=document.querySelector('.results');
let form=document.querySelector('form');
let input=document.querySelectorAll(`input[type='text']`);
let word, letter, answer=0, occurence, checkNumber;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkOccurence();
});
function checkOccurence(){
    word=input[0].value;
    letter=input[1].value;
    occurence=new RegExp(letter,'g');
    checkNumber=new RegExp(/\d/,'g');
    checkSpecialCase=new RegExp(/[!@#$%^&*()]/,'g');
    if(checkNumber.test(word)||checkNumber.test(letter)){
        alert('Numbers are not allowed');
        return;
    }
    if(checkSpecialCase.test(word)||checkSpecialCase.test(letter)){
        alert('Special case are not allowed');
        return;
    }
    answer=word.match(occurence);
    if(answer===null)answer='No letter found in the word';
    else answer=answer.length;
    result.innerHTML=answer;
}
