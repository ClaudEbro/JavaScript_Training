const questions = [
    {
        question :
            'Who is the compositor of the film Amadeus ?\n1. Beethoven\n2. Mozart',
        answer: 2
    },
    {
        question :
            'What is the capital of Austria ?\n1. Vienna\n2. Oslo',
        answer: 1
    },
    {
        question :
            'What is the organ disturbed by tinnitus ?\n1. Foots\n2. Ears',
        answer: 1
    }
]

/************* Start the play **************/

let nbGoodAnswer = 0;
for(i=0; i<questions.length; i+=1){
    let respUser = prompt(questions[i].question);
    if (respUser == questions[i].answer){
        alert('Good answer');
        nbGoodAnswer += 1;
    }else {
        alert('Bad answer');
    }
}

if (nbGoodAnswer <=1){
    alert(`You have ${nbGoodAnswer} good answer on ${questions.length}.`);
}else {
    alert(`You have ${nbGoodAnswer} good answers on ${questions.length}.`);
} 
