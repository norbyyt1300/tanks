var rollDiceButton = document.getElementById('roll');

rollDiceButton.onclick = function () { rollDice(); };

var allDiceElements = [...document.getElementsByClassName("dice")];

function rollDice() {
    allDiceElements.forEach(function (dieElement) {
        var dieValue = Math.floor((Math.random() * 6) + 1);
        for (var i = 1; i <= 6; i++) {
            dieElement.classList.remove('show-' + i);
            if (dieValue === i) {
                dieElement.classList.add('show-' + i);
            }
        }
    });
    setTimeout(rollDice(), 1000);
}

function toggleVisibility(element) {
    if (element.style.visibility === "hidden") {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}

var allDiceContainers = [...document.getElementsByClassName("dicecontainer")];
function reloadDice() {
    allDiceContainers.forEach(function (diceContainer) {
        diceContainer.style.visibility = "visible";
    });
}