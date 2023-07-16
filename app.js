
var pos = 0, question, optionA, optionB, optionC, optionD, options, choice, correct = 0;
var questions = [
    ['Where is the capital of Nigeria', 'Gambia', 'Abuja', 'Kano', 'Kogi', 'B'],
    ['Where is the largets city in west africa', 'Yamel', 'Nigeria', 'Kano', 'Ibadan', 'D'],
    ['Who is the president of Nigeria', 'Ahmed Bola Tinubu', 'Ismail Kabir', 'Aisha Bala', 'John Dumelo', 'A'],
    ['What colour is the moon?', 'Red', 'Black', 'white', 'Brown', 'C'],
    ['What is your surname of president muhammad ?', 'Yahaya', 'Buhari', 'John', 'Kabir', 'B'],
    ['social studie is the studie of man and his past event', 'All of the above', ' None of the above', 'Yes', 'Fales', 'C'],
    ['what can we fine in a room ?', 'car', 'hosre', 'bed', 'chair', 'c'],
    ['do we have teacher in school ?', 'Yes', 'No', 'All of the above', 'No of the above', 'A'],
    ['2+2+4=?', '8', '45', '2', '9', '4'],
];


function renderQuestion()
{
    if(pos == questions.length)
    {
        //Complete
        var test = document.querySelector(".test");
        test.innerHTML = `
        <h3 id="control">Congratulation You Have Completed Your Exam!</h3>
        <p id="score">
        Congratulation You score ${correct} out of ${questions.length}
        </p>
        `;
    }
    else
    {
        var test_title = document.querySelector('.test_title');
        test_title.innerHTML = `
            <h2 class="h2_title"> 
                Question ${pos+1} of ${questions.length}
            </h2>
        `;
        question = questions[pos][0];
        optionA = questions[pos][1];
        optionB = questions[pos][2];
        optionC = questions[pos][3];
        optionD = questions[pos][4];

        var test = document.querySelector(".test");
        test.innerHTML = `<p id="questPara">${pos+1}. ${question}</p>`;
        test.innerHTML += `<input type="radio" name="option" value="A"> ${optionA} <br>`;
        test.innerHTML += `<input type="radio" name="option" value="B"> ${optionB} <br>`;
        test.innerHTML += `<input type="radio" name="option" value="C"> ${optionC} <br>`;
        test.innerHTML += `<input type="radio" name="option" value="D"> ${optionD} <br> <br>`;
        test.innerHTML += `<button id="submitBtn"> Submit Answer </button> <br>`;

        if(document.querySelector('#submitBtn'))
        {
            document.querySelector('#submitBtn').addEventListener('click', e => {
                e.preventDefault();
                checkAnswer();
            })
        }

    } 

}

function checkAnswer()
{
    options = document.getElementsByName('option');
    for (let i = 0; i < options.length; i++)
    {
        if(options[i].checked)
            choice = options[i].value;
    }

    if(choice == questions[pos][5])
        correct++;
    
    pos++;
    renderQuestion();
}

renderQuestion();



function showTime()
{
    var ampm;
    var d = new Date();
    var hour = d.getHours();
    if(hour < 10)
        hour = '0'+hour;

    var minutes = d.getMinutes();
    if(minutes < 10)
        minutes = '0'+minutes;

    var second = d.getSeconds();
    if(second < 10) 
        second = '0'+second;

    var realtime = hour +' : '+ minutes +' : '+ second ;
    document.querySelector('#time_h2').innerHTML = realtime;
}
showTime();
setInterval(showTime, 1000);