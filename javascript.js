document.getElementById("button1").onclick = function() {growFunction()};

function growFunction() {document.getElementById("box").style.height = "400px" ; document.getElementById("box").style.width = "400px"
    
}

document.getElementById("button2").onclick = function() {blueFunction()}

function blueFunction() {document.getElementById("box") .style.backgroundColor = "blue"
    
}

document.getElementById("button3").onclick = function() {fadeFunction()}

function fadeFunction() {document.getElementById("box") .style.opacity =".2"

}

document.getElementById("button4").onclick = function() {resetFunction()}

function resetFunction() 
{document.getElementById("box")
.style.height="150px"; 
document.getElementById("box").style.width="150px"
document.getElementById("box")
.style.backgroundColor="orange"; 
document.getElementById("box")
.style.opacity ="1"

}