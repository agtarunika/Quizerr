const correctanswers=['B','C','D','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    //check ans
    userAnswers.forEach((answer,index)=>{
        if(answer === correctanswers[index]){
            score +=25;
        }
    });

    //show sresult on page
    window.scrollTo(0,0);
    
    result.classList.remove('d-none');

    let output=0;
    const timer=setInterval(() => {
        result.querySelector('span').textContent=`${output}%`;
        if(output===score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 10);
});

// let i=0;
// const timer=setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i===5){
//         clearInterval(timer);
//     }
// }, 1000);


// setInterval(() => {
//     console.log('hello');
// }, 1000);

//window object(global object)

// console.log(document.querySelector('form'));

// alert('hello');

// setTimeout(()=>{
//     alert('hello,ninjas');
// },3000  );
