function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5e5rtjnP9ey":
        Script1();
        break;
      case "6XtD0bl8Zle":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var text = "Rapidly emergent understanding of Articulate 360. Extensive prior use of Adobe Suite. Confident user of Microsoft Office Suite. LMS experience with Canvas. I am a competent A.I. user (ex: I used ChatGPT to write a JavaScript to create this typing effect).";
var i = 0;
var i = 0;

function typeWriter() {
    if (i < text.length) {
        var current = player.GetVar("typedText");
        player.SetVar("typedText", current + text.charAt(i));
        i++;
        setTimeout(typeWriter, 50); // Adjust speed here
    }
}

player.SetVar("typedText", "");
typeWriter();

}

function Script2()
{
  var player = GetPlayer();


var variables = ["U1", "U2", "U3", "U4", "U5", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10", "G1", "G2", "G3", "G4", "G6", "G7", "G8"];

variables.forEach(function(name) {
    var value = player.GetVar(name);
    if (value) {
        player.SetVar(name, value.toUpperCase());
    }
});

}

