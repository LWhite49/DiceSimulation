/* Basic Function that accepts a number of sides a die has, and returns a random result of rolling it */
function rollDie(sides) {
    return Math.ceil(Math.random() * sides) ;
} ;

/* Use the default operator to call the object from local storage if possible, or create default values if it cannot */
const fourSideDie = JSON.parse(localStorage.getItem('d4')) || {
    1:0,
    2:0,
    3:0,
    4:0
};

const sixSideDie = JSON.parse(localStorage.getItem('d6')) || {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
};

const tenSideDie = JSON.parse(localStorage.getItem('d10')) || {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
    10:0
};

const twentySideDie = JSON.parse(localStorage.getItem('d20')) || {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
    10:0,
    11:0,
    12:0,
    13:0,
    14:0,
    15:0,
    16:0,
    17:0,
    18:0,
    19:0,
    20:0
};

/*Pull HTML elements into JS obects*/
const rollOutputElem = document.querySelector('.roll-output');
const multiplierOutoutElem = document.querySelector(`.roll-multiplier-output`);
const statlineToggleElem = document.querySelector('.statline-output-wrap');
const d4hiddenStatlineElem = document.querySelector('.d4statline-hidden-output');
const d6hiddenStatlineElem = document.querySelector('.d6statline-hidden-output');
const d10hiddenStatlineElem = document.querySelector('.d10statline-hidden-output');
const d20hiddenStatlineElem = document.querySelector('.d20statline-hidden-output');
const hiddenStatlinesWrapElem = document.querySelector('.hidden-wrap');

/*Roll functions for each die, that simulate rollNum rolls and outputs the results */
const fourSideDieRoll = (rollNum = 1) => {
    /* Prepares an assembly string and results list */
    let assemblyString = `<img class="roll-output-image" src="images/Dice/redD4.png"/>`
    let dieResults = [];
    /* Simulates dice roll, updates and saves object, and adds result to a running list rollNum times. */
    for (let i = 0; i < rollNum; i++) {
        const d4Result = rollDie(4);
        fourSideDie[String(d4Result)] += 1;
        localStorage.setItem('d4', JSON.stringify(fourSideDie));
        dieResults.push(d4Result); }
    
    /* Sorts dieResults */
    dieResults.sort( (a,b) => a-b);
    /* Iterate values in sorted array, adding to assembly string */
    dieResults.forEach( value => {
        assemblyString += ` ${value},`;
    });
    /* Send assembly string to roll output*/
    rollOutputElem.innerHTML = assemblyString.substring(0, assemblyString.length-1);
    /* If statlines are being shown, update statline */
    if (d4hiddenStatlineElem.innerHTML !== '') {
        const d4statlineOutput = `D4 Stats: 1-${fourSideDie['1']}   2-${fourSideDie['2']}   3-${fourSideDie['3']}   4-${fourSideDie['4']}`;
        d4hiddenStatlineElem.innerHTML = d4statlineOutput;
    }
}

/* Remaining dieRoll functions follow the same formate as fourSideDieRoll */
const sixSideDieRoll = (rollNum = 1) => {
    let assemblyString = `<img class="roll-output-image" src="images/Dice/blackD6.png" />`;
    let dieResults = [];
    for ( let i = 0; i < rollNum; i++) {
        const d6Result = rollDie(6);
        sixSideDie[String(d6Result)] += 1;
        localStorage.setItem('d6', JSON.stringify(sixSideDie));
        dieResults.push(d6Result);}
    
    dieResults.sort( (a, b) => a - b);
    dieResults.forEach( value => {assemblyString += ` ${value},`});
    rollOutputElem.innerHTML = assemblyString.substring(0, assemblyString.length - 1);
    if (d6hiddenStatlineElem.innerHTML !== '') {
        const d6statlineOutput = `D6 Stats: 1-${sixSideDie['1']}   2-${sixSideDie['2']}   3-${sixSideDie['3']}   4-${sixSideDie['4']}   5-${sixSideDie['5']}   6-${sixSideDie['6']}`;
        d6hiddenStatlineElem.innerHTML = d6statlineOutput;
    }
};

const tenSideDieRoll = (rollNum = 1) => {
    let assemblyString = `<img class="roll-output-image" src="images/Dice/whiteD10.png"/>`;
    let dieResults = [];
    for ( let i = 0; i < rollNum; i++) {
        const d10Result = rollDie(10);
        tenSideDie[String(d10Result)] += 1;
        localStorage.setItem('d10', JSON.stringify(tenSideDie));
        dieResults.push(d10Result); }
    dieResults.sort( (a, b) => a - b);
    dieResults.forEach( value => {assemblyString += ` ${value},`});
    rollOutputElem.innerHTML = assemblyString.substring(0, assemblyString.length-1);
    if (d10hiddenStatlineElem.innerHTML !== '') {
        const d10statlineOutput = `D10 Stats: 1-${tenSideDie['1']}   2-${tenSideDie['2']}   3-${tenSideDie['3']}   4-${tenSideDie['4']}   5-${tenSideDie['5']}   6-${tenSideDie['6']}   7-${tenSideDie['7']}   8-${tenSideDie['8']}   9-${tenSideDie['9']}   10-${tenSideDie['10']}`;
        d10hiddenStatlineElem.innerHTML = d10statlineOutput;
    }
}

const twentySideDieRoll = (rollNum = 1) => {
    let assemblyString = `<img class="roll-output-image" src="images/Dice/purpleD20.png"/>`
    let dieResults = [];
    for (let i = 0; i < rollNum; i++) {
        const d20Result = rollDie(20);
        twentySideDie[String(d20Result)] += 1;
        localStorage.setItem('d20', JSON.stringify(twentySideDie));
        dieResults.push(d20Result);}
    dieResults.sort((a,b) => a-b);
    dieResults.forEach( value => {assemblyString += ` ${value},`});
    rollOutputElem.innerHTML = assemblyString.substring(0, assemblyString.length - 1);
    if (d20hiddenStatlineElem.innerHTML !== '') {
        const d20statlineOutput = `D20 Stats:  1-${twentySideDie['1']}   2-${twentySideDie['2']}   3-${twentySideDie['3']}   4-${twentySideDie['4']}   5-${twentySideDie['5']}   6-${twentySideDie['6']}   7-${twentySideDie['7']}   8-${twentySideDie['8']}   9-${twentySideDie['9']}   10-${twentySideDie['10']}
            11-${twentySideDie['11']}   12-${twentySideDie['12']}   13-${twentySideDie['13']}   14-${twentySideDie['14']}   15-${twentySideDie['15']}   16-${twentySideDie['16']}   17-${twentySideDie['17']}   18-${twentySideDie['18']}   19-${twentySideDie['19']}   20-${twentySideDie['20']}`
            d20hiddenStatlineElem.innerHTML = d20statlineOutput;
    }
}

/* Pull die */
const d4ButtonElem = document.querySelector(`.d4-button`);
const d6ButtonElem = document.querySelector(`.d6-button`);
const d10ButtonElem = document.querySelector(`.d10-button`);
const d20ButtonElem = document.querySelector(`.d20-button`);

function statlineOnClick() {
    /* If toggle is off */
    if (statlineToggleElem.innerText === 'View Die Statlines') {
        /* Assign each statline to a unique variable for each die */
        const d4statlineOutput = `D4 Stats: 1-${fourSideDie['1']}   2-${fourSideDie['2']}   3-${fourSideDie['3']}   4-${fourSideDie['4']}`;
        const d6statlineOutput = `D6 Stats: 1-${sixSideDie['1']}   2-${sixSideDie['2']}   3-${sixSideDie['3']}   4-${sixSideDie['4']}   5-${sixSideDie['5']}   6-${sixSideDie['6']}`;
        const d10statlineOutput = `D10 Stats: 1-${tenSideDie['1']}   2-${tenSideDie['2']}   3-${tenSideDie['3']}   4-${tenSideDie['4']}   5-${tenSideDie['5']}   6-${tenSideDie['6']}   7-${tenSideDie['7']}   8-${tenSideDie['8']}   9-${tenSideDie['9']}   10-${tenSideDie['10']}`;
        const d20statlineOutput = `D20 Stats:  1-${twentySideDie['1']}   2-${twentySideDie['2']}   3-${twentySideDie['3']}   4-${twentySideDie['4']}   5-${twentySideDie['5']}   6-${twentySideDie['6']}   7-${twentySideDie['7']}   8-${twentySideDie['8']}   9-${twentySideDie['9']}   10-${twentySideDie['10']}
            11-${twentySideDie['11']}   12-${twentySideDie['12']}   13-${twentySideDie['13']}   14-${twentySideDie['14']}   15-${twentySideDie['15']}   16-${twentySideDie['16']}   17-${twentySideDie['17']}   18-${twentySideDie['18']}   19-${twentySideDie['19']}   20-${twentySideDie['20']}`;
        /* Assign each HTML hidden object's contents to the statline contained in the unique variable assigned above */
        d4hiddenStatlineElem.innerHTML = d4statlineOutput;
        d6hiddenStatlineElem.innerHTML = d6statlineOutput;
        d10hiddenStatlineElem.innerHTML = d10statlineOutput;
        d20hiddenStatlineElem.innerHTML = d20statlineOutput;
        /* Change toggle text to reflect position */
        statlineToggleElem.innerHTML = 'Hide Die Statlines';
        hiddenStatlinesWrapElem.classList.add('hidden-statlines-wrap') }
    /*If toggle is on*/
    else {
        /* Hide hidden outputs again */
        d4hiddenStatlineElem.innerHTML = '';
        d6hiddenStatlineElem.innerHTML = '';
        d10hiddenStatlineElem.innerHTML = '';
        d20hiddenStatlineElem.innerHTML = '';
        statlineToggleElem.innerHTML = 'View Die Statlines'; 
        hiddenStatlinesWrapElem.classList.remove('hidden-statlines-wrap');}
    };
    
/* Function that resets all statlines, and forces open statline */
function resetStatlines() {
    /* Reset all die statlines to zero, then save over the existing object in local storage */
    for (let i = 1; i < 5; i++) {
        fourSideDie[String(i)] = 0;
    }

    for (let i = 1; i < 7; i++) {
        sixSideDie[String(i)] = 0;
    }

    for (let i = 1; i < 11; i++) {
        tenSideDie[String(i)] = 0;
    }

    for (let i = 1; i < 21; i++) {
        twentySideDie[String(i)] = 0;
    }

    localStorage.setItem('d4', JSON.stringify(fourSideDie));
    localStorage.setItem('d6', JSON.stringify(sixSideDie));
    localStorage.setItem('d10', JSON.stringify(tenSideDie));
    localStorage.setItem('d20', JSON.stringify(twentySideDie));

    /* If statline is closed, open it */
    if (statlineToggleElem.innerText === 'View Die Statlines') {
        statlineOnClick();
    }

    /* If statline is open, close then open, refreshing it */
    else if (statlineToggleElem.innerText === 'Hide Die Statlines') {
        statlineOnClick();
        statlineOnClick();
    }
    /*Reset roll output */
    rollOutputElem.innerHTML = "N/A";
}

/* Adds an event listener to reset button to toggle this function on click */
const resetButtonElem = document.querySelector(`.reset-statlines`);
resetButtonElem.addEventListener('click', () => {
    resetStatlines();
});

/* SetInterval functions and ID for multiplying roll */
function rollMultiplier() {
    rollNum += 1;
    multiplierOutoutElem.innerHTML = `x${rollNum}`;
}

let rollMultiplierID, rollNum, clearMultiplierID;

function clearMultiplier() {
    clearInterval(rollMultiplierID);
    clearTimeout(clearMultiplierID);
    rollNum = 1;
    multiplierOutoutElem.innerHTML = `x${rollNum}`;
    rollMultiplierID = null;
    clearMultiplierID = null;
}
/* On mousedown, reset rollNum to 1, and run a function every half second that increases rollNum and updates roll Output */
d4ButtonElem.addEventListener(`mousedown`, () => {
    rollNum = 1;
    rollMultiplierID = setInterval(rollMultiplier, 500);
})

/* On mouseup, clear interval and pass rollNum into the parameter for d6 die roll */
d4ButtonElem.addEventListener('mouseup', () => {
    /* If roll was already processed by mouseleave, cancel listener */
    if (!rollMultiplierID) {
        return
    }
    else {
        fourSideDieRoll(rollNum);
        clearMultiplier(); }
})

/* On mouseleave, if the setInterval is still running, run code as if the mouse unclicked */
d4ButtonElem.addEventListener('mouseleave', () => {
    if (rollMultiplierID) {
        fourSideDieRoll(rollNum);
        clearMultiplier();
    }
})

/* Reapply these listeners to the other die */

/* On mousedown, reset rollNum to 1, and run a function every half second that increases rollNum and updates roll Output */
d6ButtonElem.addEventListener(`mousedown`, () => {
    rollNum = 1;
    rollMultiplierID = setInterval(rollMultiplier, 500);
})

/* On mouseup, clear interval and pass rollNum into the parameter for d4die roll */
d6ButtonElem.addEventListener('mouseup', () => {
    if (!rollMultiplierID) {
        return
    }
    else {
        sixSideDieRoll(rollNum);
        clearMultiplier(); }
})

/* On mouseleave, if the setInterval is still running, run code as if the mouse unclicked */
d6ButtonElem.addEventListener('mouseleave', () => {
    if (rollMultiplierID) {
        sixSideDieRoll(rollNum);
        clearMultiplier();}
})
/* On mousedown, reset rollNum to 1, and run a function every half second that increases rollNum and updates roll Output */
d10ButtonElem.addEventListener(`mousedown`, () => {
    rollNum = 1;
    rollMultiplierID = setInterval(rollMultiplier, 500);
})

/* On mouseup, clear interval and pass rollNum into the parameter for d10 die roll */
d10ButtonElem.addEventListener('mouseup', () => {
    if (!rollMultiplierID) {
        return }
    else {
        tenSideDieRoll(rollNum);
        clearMultiplier(); }
    })

/* On mouseleave, if the setInterval is still running, run code as if the mouse unclicked */
d10ButtonElem.addEventListener('mouseleave', () => {
    if (rollMultiplierID) {
        tenSideDieRoll(rollNum);
        clearMultiplier();}})

/* On mousedown, reset rollNum to 1, and run a function every half second that increases rollNum and updates roll Output */
d20ButtonElem.addEventListener(`mousedown`, () => {
    rollNum = 1;
    rollMultiplierID = setInterval(rollMultiplier, 500);
})

/* On mouseup, clear interval and pass rollNum into the parameter for d20 die roll */
d20ButtonElem.addEventListener('mouseup', () => {
    if (!rollMultiplierID) {
        return }
    else {
        twentySideDieRoll(rollNum);
        clearMultiplier(); }
    })

/* On mouseleave, if the setInterval is still running, run code as if the mouse unclicked */
d20ButtonElem.addEventListener('mouseleave', () => {
    if (rollMultiplierID) {
        twentySideDieRoll(rollNum);
        clearMultiplier();}})

/* Add event listener to outline click */
statlineToggleElem.addEventListener("click", () => {
    statlineOnClick();
})