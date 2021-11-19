const scr = document.getElementById("score");
const result = document.getElementById("result");
const bonus = document.getElementById("bonus");

var link = window.location.href;
var splitted = link.split("?");
var score = splitted[1].split("=");
if (score[1] >= 0)
{
    scr.innerHTML = `+${score[1]} Social Credits`;
    result.src = "SocialCred+.png";
}
else
{
    scr.innerHTML = `${score[1]} Social Credits`;
    result.src = "SocialCred-.png";
}
if (score[1] == 1000000)
{
    bonus.innerHTML = "ขอแสดงความยินดีด้วย!!! คุณได้รับ Social Credits เต็มจำนวน กรุณารับของสมนาคุณได้ที่ CHAMBER";
}