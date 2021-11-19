const th = document.getElementById("th");
const king = document.getElementById("king");

th.volume = 0.2;
king.volume = 0.2;
th.play();

th.addEventListener("ended", function()
{
    king.play();
});

king.addEventListener("ended", function()
{
    ks.play();
});

var questions = new Array;
var points = 0;

function sendAns()
{
    const correct = [1, 3, 3, 5, 3, 3, 1, 1, 3, 1];
    questions = [document.getElementById("reli").value, document.getElementById("horny").value, document.getElementById("stabun").value, document.getElementById("kings").value, document.getElementById("kill").value, document.getElementById("prot").value, document.getElementById("14oct").value, document.getElementById("boomer").value, document.getElementById("lgbt").value, document.getElementById("olf").value];
    for (var i = 0; i < 10; i++)
    {
        if (questions[i] == correct[i])
        {
            points += 100000;
        }
        else
        {
            points -= 100000;
        }
        if ((i == 3 && (questions[i] == 2 || questions[i] == 3 || questions[i] == 4)) || (i == 4 && questions[i] == 4) || (i == 8 && questions[i] == 2))
        {
            points -= 50000;
        }
    }
    window.location = "result.html?score=" + points;
}